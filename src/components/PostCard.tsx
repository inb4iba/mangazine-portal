import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AuthorNameplate } from "./AuthorNameplate";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { POSTS_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { roboto } from "@/app/(blog)/layout";

export type PostCardProps = {
  addSeparator: boolean;
  post: POSTS_QUERYResult[number];
};

export const PostCard = ({ addSeparator, post }: PostCardProps) => {
  return (
    <article key={post._id} className="flex flex-col gap-5">
      {addSeparator && <div className="w-8/12 h-[1px] bg-zinc-200"></div>}
      <div className="flex flex-grow gap-5">
        <Link
          href={`/posts/${post.slug}`}
          className="relative w-2/6 aspect-video flex items-center">
          <Image
            src={urlFor(post.cover as SanityImageSource).url()}
            alt="cover image"
            fill
            className="object-cover"
          />
        </Link>
        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="font-bold text-2xl">{post.title}</h3>
            </Link>
            <p className={`${roboto.className} text-zinc-600`}>
              {post.description}
            </p>
          </div>
          <div className="flex justify-between items-center w-11/12 text-sm">
            <AuthorNameplate author={post.author} />
            <span className="text-zinc-600">{formatDate(post.created_at)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
