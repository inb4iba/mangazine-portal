import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { AuthorNameplate } from "./AuthorNameplate";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { POSTS_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Separator } from "./Separator";
import { roboto } from "@/app/fonts";

export type PostCardProps = {
  addSeparator: boolean;
  post: POSTS_QUERYResult[number];
};

export const PostCard = ({ addSeparator, post }: PostCardProps) => {
  return (
    <article key={post._id} className="flex flex-col gap-5">
      {addSeparator && <Separator />}
      <div className="flex flex-col sm:flex-row flex-grow gap-3">
        <Link
          href={`/posts/${post.slug}`}
          className="relative aspect-video sm:aspect-square lg:aspect-video flex sm:w-1/3 lg:w-2/5 items-center">
          <Image
            src={urlFor(post.cover as SanityImageSource).url()}
            alt="cover image"
            fill
            className="object-cover"
          />
          <Link
            href={`/?tag=${post.tag}`}
            className="absolute w-fit px-3 py-1 text-sm bg-violet-500 text-white bottom-2 left-2 rounded">
            {post.tag}
          </Link>
        </Link>
        <div className="flex flex-1 flex-col justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="font-semibold text-2xl">{post.title}</h3>
            </Link>
            <p className={`${roboto.className} text-zinc-600`}>
              {post.description}
            </p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <AuthorNameplate author={post.author} />
            <span className="text-zinc-600">{formatDate(post.created_at)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
