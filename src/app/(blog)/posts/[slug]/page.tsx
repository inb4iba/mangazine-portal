import { PodcastPlayer } from "@/components/Post Page/PodcastPlayer";
import { PostCoverImage } from "@/components/Post Page/PostCoverImage";
import { PostDetailsSidebar } from "@/components/Post Page/PostDetailsSidebar";
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
    <main className="flex flex-1 justify-center">
      <div className="flex flex-col xl:w-[1248px] mt-2 mb-8 gap-8">
        <PostCoverImage
          coverUrl={urlFor(post.cover as SanityImageSource).url()}
          title={post.title || ""}
        />
        <div className="flex flex-grow gap-20 relative">
          <section className="flex flex-col flex-grow px-6 py-4 gap-5">
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
          <PostDetailsSidebar
            author={post.author}
            body={post.body}
            created_at={post.created_at || ""}
          />
        </div>
      </div>
    </main>
  );
};

export default Post;
