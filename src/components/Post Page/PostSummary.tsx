import { generateSlug } from "@/utils/generateSlug";

type Props = {
  chapters: string[];
};

export const PostSummary = ({ chapters }: Props) => {
  return (
    <div className="flex w-10/12 py-4 px-6">
      <ul className="flex flex-col gap-2 font-semibold text-lg">
        {chapters.map((chapter) => {
          const slug = generateSlug(chapter);

          return (
            <li key={slug}>
              <a href={`#${slug}`} className="hover:text-violet-600">
                {" "}
                {chapter}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
