import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PostSummary } from "@/types/post";
import { AuthorNameplate } from "./AuthorNameplate";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

export type PostCardProps = {
  addSeparator: boolean;
  post: PostSummary;
};

export const PostCard = ({ addSeparator, post }: PostCardProps) => {
  return (
    <article key={post._id} className="flex flex-col gap-5">
      {addSeparator && <div className="w-8/12 h-[1px] bg-zinc-200"></div>}
      <div className="flex gap-5">
        <Link
          href={`/posts/${post.slug}`}
          className="relative w-1/4 aspect-video flex items-center">
          <Image
            src={urlFor(post.cover).url()}
            alt="cover image"
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="font-bold text-3xl">{post.title}</h3>
            </Link>
            <p className="w-4/5 text-zinc-600">{post.description}</p>
          </div>
          <div className="flex justify-between items-center w-11/12">
            <AuthorNameplate author={post.author} />
            <span className="text-zinc-600">{formatDate(post.created_at)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
