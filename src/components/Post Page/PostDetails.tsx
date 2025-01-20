import { filterChaptersFromBody } from "@/utils/filterChapters";
import { PostSummary } from "./PostSummary";
import { AuthorNameplate } from "../AuthorNameplate";
import { formatDate } from "@/utils/formatDate";
import { SINGLE_POST_QUERYResult } from "@/sanity/types";
import { Separator } from "../Separator";

type Props = {
  body: NonNullable<SINGLE_POST_QUERYResult>["body"];
  author: NonNullable<SINGLE_POST_QUERYResult>["author"];
  created_at: string;
  tag: string | null;
};

export const PostDetails = ({ author, body, created_at, tag }: Props) => {
  return (
    <aside className="relative top-0 flex w-full flex-col sm:sticky sm:w-96 h-fit">
      <div className="flex sm:flex-col justify-between">
        <PostSummary chapters={filterChaptersFromBody(body)} />
        <Separator className="hidden sm:block" />
        <div className="flex flex-col gap-2 px-6 py-4 sm:w-full">
          <span className="hidden font-medium sm:inline-block">
            Escrito por
          </span>
          <AuthorNameplate author={author} />
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex gap-2 px-6 py-4 sm:flex-col sm:w-full">
          <span className="hidden font-medium sm:inline-block">
            Data de publicação:{" "}
          </span>
          <span className="text-violet-600">{formatDate(created_at)}</span>
        </div>
      </div>
      {tag && (
        <>
          <Separator className="hidden sm:block" />
          <div className="flex gap-2 px-6 sm:py-4 sm:flex-col sm:w-full justify-end">
            <span className="flex w-fit px-3 py-1 rounded-full text-sm bg-violet-500 text-white">
              {tag}
            </span>
          </div>
        </>
      )}
    </aside>
  );
};
