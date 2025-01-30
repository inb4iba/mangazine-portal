import { PodcastPlayer } from "@/components/Post Page/PodcastPlayer";
import { PostCoverImage } from "@/components/Post Page/PostCoverImage";
import { PostDetails } from "@/components/Post Page/PostDetails";
import { BlockTextComponents } from "@/components/Text/BlogTextComponents";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_POST_QUERY } from "@/sanity/queries/posts";
import { SINGLE_POST_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

type PostProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PostProps): Promise<Metadata | null> => {
  const { slug } = await params;

  const post = await getData(slug);

  if (!post) return null;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title!,
      description: post.description!,
      locale: "pt-br",
      type: "website",
      url: `https://mangazine.com.br/posts/${slug}`,
      siteName: "Mangazine",
      images: [
        {
          url: urlFor(post.cover!).url(),
        },
      ],
    },
  };
};

const getData = async (slug: string) => {
  const { data } = await sanityFetch({
    query: SINGLE_POST_QUERY,
    params: {
      slug,
    },
  });

  return data;
};

const Post = async ({ params }: PostProps) => {
  const { slug } = await params;
  const post: SINGLE_POST_QUERYResult = await getData(slug);

  if (!post) throw new Error("Problema carregando o post.");

  return (
    <main className="flex justify-center flex-1">
      <div className="flex flex-col xl:w-[1248px] pb-2 gap-2 bg-white/55 backdrop-blur-lg rounded-3xl">
        <PostCoverImage
          coverUrl={urlFor(post.cover as SanityImageSource).url()}
          title={post.title || ""}
          subtitle={post.subtitle || ""}
        />
        <div className="relative flex flex-col-reverse flex-grow sm:flex-row lg:gap-20">
          <section className="flex flex-col flex-grow gap-5 p-4 sm:px-8 lg:px-6">
            {post.podcast && <PodcastPlayer url={post.podcast} />}
            <article className="prose prose-lg">
              {post.body && (
                <PortableText
                  value={post.body}
                  components={BlockTextComponents()}
                />
              )}
            </article>
            {post.mangas && (
              <div className="flex w-full h-fit p-5 gap-5 rounded-lg bg-white/70">
                {post.mangas.map((manga) => (
                  <article
                    key={manga._id}
                    className="flex flex-col w-full hover:brightness-110 transition-all">
                    <Link
                      href={manga.link!}
                      className="flex flex-col gap-1"
                      target="_blank">
                      <div className="w-full aspect-[3/4] lg:aspect-square relative">
                        <Image
                          src={manga.imageUrl!}
                          alt="manga cover"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-center">
                        {manga.title}
                      </h4>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
          <PostDetails
            author={post.author}
            proofreaders={post.proofreaders}
            body={post.body}
            created_at={post.created_at || ""}
            tag={post.tag}
          />
        </div>
      </div>
    </main>
  );
};

export default Post;
