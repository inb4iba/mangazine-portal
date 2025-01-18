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
};

export const PostDetailsSidebar = ({ author, body, created_at }: Props) => {
  return (
    <aside className="flex flex-col w-96 sticky top-0 h-fit">
      <PostSummary chapters={filterChaptersFromBody(body)} />
      <Separator />
      <div className="flex flex-col w-full py-4 px-6 gap-2">
        <span className="font-medium">Escrito por</span>
        <AuthorNameplate author={author} />
      </div>
      <Separator />
      <div className="flex flex-col w-full py-4 px-6 gap-2">
        <p className="font-medium">
          Data de publicação:{" "}
          <span className="text-violet-600">{formatDate(created_at)}</span>
        </p>
      </div>
    </aside>
  );
};
