import { Carosel } from "@/components/Carosel";
import { PaginationControls } from "@/components/PaginationControls";
import { PostCard } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import {
  COUNT_POSTS_QUERY,
  FILTER_POSTS_BY_SEARCH_QUERY,
  FILTER_POSTS_BY_TAG_QUERY,
  PAGINATING_POSTS_QUERY,
} from "@/sanity/queries/posts";
import { COUNT_POSTS_QUERYResult, POSTS_QUERYResult } from "@/sanity/types";
import { getTotalPages } from "@/utils/pagination";

const getPosts = async (
  perPage: number,
  page: number = 1,
  tag?: string,
  s?: string
) => {
  if (tag) {
    const { data } = await sanityFetch({
      query: FILTER_POSTS_BY_TAG_QUERY,
      params: {
        perPage,
        page,
        postTag: tag,
      },
    });

    return data;
  }

  if (s) {
    const { data } = await sanityFetch({
      query: FILTER_POSTS_BY_SEARCH_QUERY,
      params: {
        perPage,
        page,
        s: s,
      },
    });

    return data;
  }

  const { data } = await sanityFetch({
    query: PAGINATING_POSTS_QUERY,
    params: {
      perPage,
      page,
    },
  });

  return data;
};

const getPostsCount = async () => {
  const { data } = await sanityFetch({
    query: COUNT_POSTS_QUERY,
  });

  return data;
};

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
    tag?: string;
    s?: string;
  }>;
}) {
  const params = await props.searchParams;
  const page = params?.page;
  const tag = params?.tag;
  const s = params?.s;
  const PER_PAGE = 10;
  const postsCount: COUNT_POSTS_QUERYResult = await getPostsCount();

  const totalPages = getTotalPages(postsCount, PER_PAGE);

  if (page && (Number(page) > totalPages || Number(page) < 1))
    throw new Error("Página inválida!");

  const posts: POSTS_QUERYResult = await getPosts(
    PER_PAGE,
    page ? (Number.isNaN(page) ? undefined : Number(page)) : undefined,
    tag,
    s
  );

  return (
    <main className="flex justify-center flex-1">
      <div className="flex flex-col xl:w-[1248px] bg-white/65 sm:rounded-b-3xl lg:rounded-3xl backdrop-blur-lg overflow-hidden">
        <Carosel posts={posts.filter((p, idx) => idx < 3)} />
        <div className="flex gap-5 p-4 sm:p-8">
          <section className="flex flex-col flex-1 gap-5 justify-between">
            {posts.map((post, idx) => (
              <PostCard addSeparator={idx !== 0} key={post._id} post={post} />
            ))}
            <PaginationControls pagesCount={totalPages} />
          </section>
          <section className="flex bg-zinc-300 h-80 lg:h-full lg:w-60"></section>
        </div>
      </div>
    </main>
  );
}
