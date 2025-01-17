import { PostCard } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/queries/posts";
import { PostSummary } from "@/types/post";

async function getData() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return data;
}

export default async function Home() {
  const data: PostSummary[] = await getData();

  return (
    <main className="flex flex-1 justify-center">
      <div className="flex xl:w-[1248px] my-8">
        <section className="flex-grow flex flex-col gap-5">
          {data.map((post, idx) => (
            <PostCard addSeparator={idx !== 0} key={post._id} post={post} />
          ))}
        </section>
        <section className="w-64 bg-zinc-300"></section>
      </div>
    </main>
  );
}
