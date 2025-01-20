import { PodcastPlayer } from "@/components/Post Page/PodcastPlayer";
import { PostCoverImage } from "@/components/Post Page/PostCoverImage";
import { PostDetails } from "@/components/Post Page/PostDetails";
import { BlockTextComponents } from "@/components/Text/BlogTextComponents";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_POST_QUERY } from "@/sanity/queries/posts";
import { SINGLE_POST_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";

type PostProps = {
  params: Promise<{ slug: string }>;
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
      <div className="flex flex-col xl:w-[1248px] pb-2 gap-2">
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
          </section>
          <PostDetails
            author={post.author}
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
