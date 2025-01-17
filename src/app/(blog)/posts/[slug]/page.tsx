import { AuthorNameplate } from "@/components/AuthorNameplate";
import { PostCoverImage } from "@/components/PostCoverImage";
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
      <div className="flex flex-col xl:w-[1248px] mt-2 mb-8 gap-8">
        <PostCoverImage
          coverUrl={urlFor(post.cover).url()}
          title={post.title}
        />
        <div className="flex flex-grow gap-20 relative">
          <section className="flex-grow px-6 py-4">
            <article className="prose prose-lg">
              <PortableText value={post.body} />
            </article>
          </section>
          <section className="flex flex-col w-96 sticky top-0 h-fit">
            <div className="flex w-full py-4 px-6">
              <ul className="flex flex-col gap-2 font-semibold text-lg">
                <li>
                  <a href="#1" className="hover:text-violet-600">
                    Intro
                  </a>
                </li>
                <li>
                  <a href="#2" className="hover:text-violet-600">
                    Capítulo 1
                  </a>
                </li>
                <li>
                  <a href="#3" className="hover:text-violet-600">
                    Capítulo 2
                  </a>
                </li>
                <li>
                  <a href="#4" className="hover:text-violet-600">
                    Conclusão
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-auto w-11/12 h-[1px] bg-zinc-200"></div>
            <div className="flex flex-col w-full py-4 px-6 gap-2">
              <span className="font-medium">Escrito por</span>
              <AuthorNameplate author={post.author} />
            </div>
            <div className="mx-auto w-11/12 h-[1px] bg-zinc-200"></div>
            <div className="flex flex-col w-full py-4 px-6 gap-2">
              <p className="font-medium">
                Data de publicação:{" "}
                <span className="text-violet-600">
                  {formatDate(post.created_at)}
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
    // <main className="flex flex-1 justify-center">
    //   <div className="flex flex-col xl:w-[1248px] my-8 gap-5">
    //     <div className="relative h-60">
    //       <Image
    //         src={urlFor(post.cover).url()}
    //         alt="cover image"
    //         fill
    //         className="object-cover fixed"
    //       />
    //     </div>
    //     <h1 className="text-4xl font-bold text-zinc-800">{post.title}</h1>
    //     <div className="flex gap-4">
    //       <AuthorNameplate author={post.author} />
    //       <span>{formatDate(post.created_at)}</span>
    //     </div>
    //     {post.podcast && <span>Tem podcast</span>}
    //   </div>
    // </main>
  );
};

export default Post;
