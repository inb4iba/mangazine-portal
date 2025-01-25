"use client";

import { GET_ALL_MANGAS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  mangas: GET_ALL_MANGAS_QUERYResult;
};

export const RecommendedMangas = ({ mangas }: Props) => {
  const [mangasCount, setMangasCount] = useState(0);

  useEffect(() => {
    const postsContainer = document.getElementById("posts-container");
    const OFFER_HEIGHT = 350;

    if (postsContainer) {
      const containerHeight = postsContainer.getBoundingClientRect().height;
      const offersPerHeight = Math.ceil(containerHeight / OFFER_HEIGHT);
      setMangasCount(offersPerHeight);
    } else {
      setMangasCount(0);
    }
  }, []);

  return (
    <>
      {mangas
        .filter((item, idx) => idx < mangasCount)
        .map((manga) => (
          <article key={manga._id} className="flex flex-col w-4/5">
            <Link href={manga.link!} className="flex flex-col gap-1">
              <div className="w-full aspect-[220/320] relative">
                <Image
                  src={manga.imageUrl!}
                  alt="manga cover"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-sm font-medium text-center">{manga.title}</h4>
            </Link>
          </article>
        ))}
    </>
  );
};
