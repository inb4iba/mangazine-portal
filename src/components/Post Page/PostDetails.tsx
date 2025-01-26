import { filterChaptersFromBody } from "@/utils/filterChapters";
import { PostSummary } from "./PostSummary";
import { AuthorNameplate } from "../AuthorNameplate";
import { formatDate } from "@/utils/formatDate";
import { SINGLE_POST_QUERYResult } from "@/sanity/types";
import { Separator } from "../Separator";
import Link from "next/link";

type Props = {
  body: NonNullable<SINGLE_POST_QUERYResult>["body"];
  author: NonNullable<SINGLE_POST_QUERYResult>["author"];
  proofreaders?: NonNullable<SINGLE_POST_QUERYResult>["proofreaders"];
  created_at: string;
  tag: string | null;
};

export const PostDetails = ({
  author,
  body,
  created_at,
  tag,
  proofreaders,
}: Props) => {
  return (
    <aside className="relative top-0 flex w-full flex-col sm:sticky sm:w-96 h-fit">
      <div className="flex sm:flex-col justify-between">
        <PostSummary chapters={filterChaptersFromBody(body)} />
        <Separator className="hidden sm:block" />
        <div className="flex flex-col gap-2 px-6 py-4 sm:w-full">
          <span className="hidden font-medium sm:inline-block">
            Escrito por
          </span>
          <AuthorNameplate author={author} showSocials={true} imageSize={36} />
        </div>
        {proofreaders && (
          <>
            <Separator className="hidden sm:block" />
            <div className="flex flex-col gap-2 px-6 py-4 sm:w-full">
              <span className="hidden font-medium sm:inline-block">
                Revisado por
              </span>
              <div className="flex flex-col gap-4">
                {proofreaders.map((proofreader) => {
                  if (!proofreader) return;
                  return (
                    <AuthorNameplate
                      author={proofreader}
                      showSocials={true}
                      imageSize={36}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
        <Separator className="hidden sm:block" />
        <div className="flex gap-1 flex-col sm:w-full">
          <div className="px-6 pt-4 flex flex-col">
            <span className="hidden font-medium sm:inline-block">
              Data de publicação:{" "}
            </span>
            <span className="text-violet-600 sm:pb-4">
              {formatDate(created_at)}
            </span>
          </div>
          {tag && (
            <>
              <Separator className="hidden sm:block p-0" />
              <div className="flex gap-2 px-6 sm:py-4 sm:flex-col sm:w-full justify-end h-fit">
                <Link
                  href={`/?tag=${tag}`}
                  className="flex w-fit px-3 py-1 rounded-full text-sm bg-violet-500 text-white">
                  {tag}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
