import { generateSlug } from "@/utils/generateSlug";

type Props = {
  chapters: string[];
};

export const PostSummary = ({ chapters }: Props) => {
  return (
    <div className="hidden w-10/12 px-6 py-4 sm:flex">
      <ul className="flex flex-col gap-2 font-semibold">
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
