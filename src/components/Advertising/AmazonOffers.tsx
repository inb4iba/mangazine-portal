import { OfferDetail } from "@/services/cache";
import Image from "next/image";

type Props = {
  term: string;
};

export const AmazonOffers = async ({ term }: Props) => {
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
    <div className="flex flex-col gap-4 items-end">
      {data &&
        data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col relative w-4/5 aspect-[217/320] gap-2">
            <div className="w-full aspect-[217/320] relative">
              <Image
                src={item.img}
                alt="manga cover"
                fill
                className="object-cover"
              />
            </div>
            <h4 className="">{item.title}</h4>
            <div className="flex justify-between">
              <span>{`R$${item.price}`}</span>
              <span className="line-through">{item.fullPrice}</span>
            </div>
          </div>
        ))}
    </div>
  );
};
