import { OfferDetail } from "@/services/cache";
import { AmazonOffers } from "./AmazonOffers";

type Props = {
  term: string;
};

export const AmazonOffersWrapper = async ({ term }: Props) => {
  const fetchOffers = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/amazon/${term}`
    );
    const { data } = await res.json();
    if (data) {
      return data;
    } else {
      console.log("Não tem data");
    }
  };

  const data: OfferDetail[] = await fetchOffers();

  return (
    <div className="flex flex-col gap-5 items-end">
      <AmazonOffers offers={data} />
    </div>
  );
};
