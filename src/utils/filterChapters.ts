import { SINGLE_POST_QUERYResult } from "@/sanity/types";

type Body = NonNullable<SINGLE_POST_QUERYResult>["body"];

const punctuations = [",", ".", "?", "!", ":", ";"];

export const filterChaptersFromBody = (body: Body): string[] => {
  if (!body) return [];

  const chapters = body
    .filter((block) => block._type === "block" && block.style?.startsWith("h"))
    .map((block) => {
      const text =
        block._type === "block" && block.children
          ? block.children.map((child) => child.text?.trim()).join(" ") || ""
          : "";

      if (
        punctuations.includes(text[text.length - 1]) &&
        text[text.length - 2] === " "
      )
        return text.slice(0, -2) + text.slice(-1);
      return text;
    });
  return chapters;
};
