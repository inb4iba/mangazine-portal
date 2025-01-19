import { PaginationControls } from "@/components/PaginationControls";
import { PostCard } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import {
  COUNT_POSTS_QUERY,
  PAGINATING_POSTS_QUERY,
} from "@/sanity/queries/posts";
import { COUNT_POSTS_QUERYResult, POSTS_QUERYResult } from "@/sanity/types";
import { getTotalPages } from "@/utils/pagination";

const getPosts = async (perPage: number, page: number = 1) => {
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
  }>;
}) {
  const params = await props.searchParams;
  const page = params?.page;
  const PER_PAGE = 2;
  const postsCount: COUNT_POSTS_QUERYResult = await getPostsCount();

  const totalPages = getTotalPages(postsCount, PER_PAGE);

  if (page && (Number(page) > totalPages || Number(page) < 1))
    throw new Error("Página inválida!");

  const posts: POSTS_QUERYResult = await getPosts(
    PER_PAGE,
    page ? (Number.isNaN(page) ? undefined : Number(page)) : undefined
  );

  return (
    <main className="flex justify-center flex-1">
      <div className="flex flex-col lg:flex-row xl:w-[1248px] gap-5 px-4 pb-4 sm:px-8 lg:pb-8">
        <section className="flex flex-col flex-1 gap-5">
          {posts.map((post, idx) => (
            <PostCard addSeparator={idx !== 0} key={post._id} post={post} />
          ))}
          <PaginationControls pagesCount={totalPages} />
        </section>
        <section className="flex bg-zinc-300 h-80 lg:h-full lg:w-60"></section>
      </div>
    </main>
  );
}
