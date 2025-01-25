import { GET_ALL_MANGAS_QUERYResult } from "@/sanity/types";
import { RecommendedMangas } from "./RecommendedMangas";

type Props = {
  mangas: GET_ALL_MANGAS_QUERYResult;
};

export const RecommendedMangasWrapper = ({ mangas }: Props) => {
  return (
    <div className="flex flex-col w-full gap-4 items-end">
      <h4>Mangás recomendados</h4>
      <RecommendedMangas mangas={mangas} />
    </div>
  );
};
