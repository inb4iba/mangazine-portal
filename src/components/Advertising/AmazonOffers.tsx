"use client";

import { OfferDetail } from "@/services/cache";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  offers: OfferDetail[];
};

export const AmazonOffers = ({ offers }: Props) => {
  const [offersCount, setOffersCount] = useState(3);

  useEffect(() => {
    const postsContainer = document.getElementById("posts-container");
    const OFFER_HEIGHT = 350;

    if (postsContainer) {
      const containerHeight = postsContainer.getBoundingClientRect().height;
      const offersPerHeight = Math.ceil(containerHeight / OFFER_HEIGHT);
      setOffersCount(offersPerHeight);
    } else {
      setOffersCount(0);
    }
  }, []);

  return (
    <>
      {offers &&
        offers
          .filter((item, idx) => idx < offersCount - 1)
          .map((item, idx) => (
            <article
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
              <div>
                <h4 className="text-sm font-medium">{item.title}</h4>
                <div className="flex justify-between">
                  <span>{`R$${item.price}`}</span>
                  <span className="line-through">{item.fullPrice}</span>
                </div>
              </div>
            </article>
          ))}
    </>
  );
};
