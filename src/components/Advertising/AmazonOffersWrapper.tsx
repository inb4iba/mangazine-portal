import { OfferDetail } from "@/services/cache";
import { AmazonOffers } from "./AmazonOffers";

type Props = {
  term: string;
};

export const AmazonOffersWrapper = async ({ term }: Props) => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/amazon/${term}`;

  const fetchOffers = async () => {
    try {
      const res = await fetch(url);
      const { data } = await res.json();
      if (data) return data;
    } catch (error) {
      console.error("FETCHING API URL:", url);
      console.error(error);
    }
  };

  const data: OfferDetail[] = await fetchOffers();

  return (
    <div className="flex flex-col gap-5 items-end">
      <AmazonOffers offers={data} />
    </div>
  );
};
