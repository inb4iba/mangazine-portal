"use client";

import { GET_ALL_MANGAS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  mangas: GET_ALL_MANGAS_QUERYResult;
};

export const RecommendedMangas = ({ mangas }: Props) => {
  const [randomizedMangas, setRandomizedMangas] =
    useState<GET_ALL_MANGAS_QUERYResult>([]);

  useEffect(() => {
    const postsContainer = document.getElementById("posts-container");
    const OFFER_HEIGHT = 350;

    if (postsContainer) {
      const containerHeight = postsContainer.getBoundingClientRect().height;
      const mangasPerHeight = Math.ceil(containerHeight / OFFER_HEIGHT);
      const selectedMangas: GET_ALL_MANGAS_QUERYResult = [];
      const selectedMangasIndex: number[] = [];

      while (selectedMangas.length < mangasPerHeight) {
        const idx = Math.floor(Math.random() * mangas.length);
        if (selectedMangasIndex.some((item) => item === idx)) continue;
        selectedMangasIndex.push(idx);
        selectedMangas.push(mangas[idx]);
      }
      setRandomizedMangas(selectedMangas);
    }
  }, []);

  return (
    <div className="flex flex-col w-4/5 h-fit p-3 gap-4 rounded-lg bg-white/70">
      {randomizedMangas.map((manga) => (
        <article
          key={manga._id}
          className="flex flex-col hover:brightness-110 transition-all">
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
    </div>
  );
};
