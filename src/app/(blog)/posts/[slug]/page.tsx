import { PostCoverImage } from "@/components/Post Page/PostCoverImage";
import { PostDetailsSidebar } from "@/components/Post Page/PostDetailsSidebar";
import { BlockTextComponents } from "@/components/Text/BlogTextComponents";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { SINGLE_POST_QUERY } from "@/sanity/queries/posts";
import { PostPage } from "@/types/post";
import { PortableText } from "next-sanity";

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
              <PortableText
                value={post.body}
                components={BlockTextComponents}
              />
            </article>
          </section>
          <PostDetailsSidebar
            author={post.author}
            body={post.body}
            created_at={post.created_at}
          />
        </div>
      </div>
    </main>
  );
};

export default Post;
