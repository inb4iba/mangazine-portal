import { GET_ALL_MANGAS_QUERYResult } from "@/sanity/types";
import { RecommendedMangas } from "./RecommendedMangas";

type Props = {
  mangas: GET_ALL_MANGAS_QUERYResult;
};

export const RecommendedMangasWrapper = ({ mangas }: Props) => {
  return (
    <div className="flex w-full justify-end h-fit">
      <RecommendedMangas mangas={mangas} />
    </div>
  );
};
