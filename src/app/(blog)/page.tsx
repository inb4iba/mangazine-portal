import { PostCard } from "@/components/PostCard";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/queries/posts";
import { POSTS_QUERYResult } from "@/sanity/types";

async function getData() {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return data;
}

export default async function Home() {
  const data: POSTS_QUERYResult = await getData();

  return (
    <main className="flex flex-1 justify-center">
      <div className="flex flex-col lg:flex-row xl:w-[1248px] gap-5 px-4 pb-4 sm:px-8 lg:pb-8">
        <section className="flex-grow flex flex-col gap-5">
          {data.map((post, idx) => (
            <PostCard addSeparator={idx !== 0} key={post._id} post={post} />
          ))}
        </section>
        <section className="bg-zinc-300 h-80 lg:h-full lg:w-96"></section>
      </div>
    </main>
  );
}
