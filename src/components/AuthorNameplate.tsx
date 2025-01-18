import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

type AuthorNameplateProps = {
  author: POSTS_QUERYResult[number]["author"];
};

export const AuthorNameplate = ({ author }: AuthorNameplateProps) => {
  if (!author) throw new Error("Post sem autor");

  return (
    <div className="flex relative items-center gap-2">
      <Image
        src={urlFor(author.avatar as SanityImageSource).url()}
        alt={`${author.name} avatar`}
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="font-medium">{author.name}</span>
    </div>
  );
};
