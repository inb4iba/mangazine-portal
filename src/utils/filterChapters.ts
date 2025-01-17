type Body = {
  style: string;
  children: {
    text: string;
  }[];
};

export const filterChaptersFromBody = (body: Body[]): string[] => {
  const chapters = body
    .filter((block) => block.style.startsWith("h"))
    .map((block) => block.children[0].text);
  return chapters;
};
