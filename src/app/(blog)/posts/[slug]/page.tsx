import { AuthorNameplate } from "@/components/AuthorNameplate";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_POST_QUERY } from "@/sanity/queries/posts";
import { PostPage } from "@/types/post";
import { formatDate } from "@/utils/formatDate";
import { PortableText } from "next-sanity";
import Image from "next/image";

type PostProps = {
  params: Promise<{ slug: string }>;
};

const getData = async (slug: string) => {
  const query = SINGLE_POST_QUERY(slug);
  const { data } = await sanityFetch({
    query,
  });

  return data;
};

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;
  const post: PostPage = await getData(slug);

  return (
    <main className="flex flex-1 justify-center">
      <section className="flex flex-col xl:w-[1248px] my-8 gap-5">
        <div className="relative h-60">
          <Image
            src={urlFor(post.cover).url()}
            alt="cover image"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-zinc-800">{post.title}</h1>
        <div className="flex gap-4">
          <AuthorNameplate author={post.author} />
          <span>{formatDate(post.created_at)}</span>
        </div>
        <article className="flex flex-col prose prose-lg max-w-none w-8/12">
          <PortableText value={post.body} />
        </article>

        {post.podcast && <span>Tem podcast</span>}
      </section>
    </main>
  );
};

export default Post;
