import { urlFor } from "@/sanity/lib/image";
import { Author } from "@/types/author";
import Image from "next/image";

type AuthorNameplateProps = {
  author: Author;
};

export const AuthorNameplate = ({ author }: AuthorNameplateProps) => {
  return (
    <div className="flex relative items-center gap-2">
      <Image
        src={urlFor(author.avatar).url()}
        alt={`${author.name} avatar`}
        width={24}
        height={24}
        className="rounded-full"
      />
      <span className="font-medium">{author.name}</span>
    </div>
  );
};
