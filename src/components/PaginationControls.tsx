"use client";

import { useSearchParams } from "next/navigation";

type Props = {
  pagesCount: number;
};

export const PaginationControls = ({ pagesCount }: Props) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  return (
    <div className="flex justify-center w-full gap-4">
      {Number(page) > 1 && (
        <>
          <span>{"<"}</span>
          <span>1</span>
        </>
      )}
      {Number(page) - 2 > 1 && <span>..</span>}
      {Number(page) - 1 > 1 && <span>{Number(page) - 1}</span>}
      <span className="text-violet-500">{page}</span>
      {Number(page) + 1 < pagesCount && <span>{Number(page) + 1}</span>}
      {Number(page) + 2 < pagesCount && <span>..</span>}
      {Number(page) < pagesCount && (
        <>
          <span>{pagesCount}</span>
          <span>{">"}</span>
        </>
      )}
    </div>
  );
};
