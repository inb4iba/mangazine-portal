import { SINGLE_POST_QUERYResult } from "@/sanity/types";

type Body = NonNullable<SINGLE_POST_QUERYResult>["body"];

export const filterChaptersFromBody = (body: Body): string[] => {
  if (!body) return [];

  const chapters = body
    .filter((block) => block._type === "block" && block.style?.startsWith("h"))
    .map((block) =>
      block._type === "block" && block.children
        ? block.children.shift()?.text || ""
        : ""
    );

  return chapters;
};
