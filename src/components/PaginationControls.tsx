"use client";

import Link from "next/link";
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
          <Link href={`/?page=${Number(page) - 1}`}>{"<"}</Link>
          <Link href={`/?page=1`}>1</Link>
        </>
      )}
      {Number(page) - 2 > 1 && <span>..</span>}
      {Number(page) - 1 > 1 && (
        <Link href={`/?page=${Number(page) - 1}`}>{Number(page) - 1}</Link>
      )}
      <span className="text-violet-500">{page}</span>
      {Number(page) + 1 < pagesCount && (
        <Link href={`/?page=${Number(page) + 1}`}>{Number(page) + 1}</Link>
      )}
      {Number(page) + 2 < pagesCount && <span>..</span>}
      {Number(page) < pagesCount && (
        <>
          <Link href={`/?page=${pagesCount}`}>{pagesCount}</Link>
          <Link href={`/?page=${Number(page) + 1}`}>{">"}</Link>
        </>
      )}
    </div>
  );
};
