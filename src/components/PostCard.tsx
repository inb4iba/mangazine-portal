import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PostSummary } from "@/types/post";
import { AuthorNameplate } from "./AuthorNameplate";

export type PostCardProps = {
  addSeparator: boolean;
  post: PostSummary;
};

export const PostCard = ({ addSeparator, post }: PostCardProps) => {
  return (
    <article key={post._id} className="flex flex-col gap-5">
      {addSeparator && <div className="w-8/12 h-[1px] bg-zinc-200"></div>}
      <div className="flex gap-5">
        <div className="relative w-1/4 aspect-video">
          <Image
            src={urlFor(post.cover).url()}
            alt="cover image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl">{post.title}</h3>
            <p className="w-4/5 text-zinc-600">{post.description}</p>
          </div>
          <div className="flex justify-between items-center w-11/12">
            <AuthorNameplate author={post.author} />
            <span className="text-zinc-600">{post.created_at}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
