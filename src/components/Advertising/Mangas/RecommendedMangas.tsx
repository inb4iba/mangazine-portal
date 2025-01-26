"use client";

import { GET_ALL_MANGAS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  mangas: GET_ALL_MANGAS_QUERYResult;
};

const TABLET_MANGAS_AMOUNT = 4;
const MOBILE_MANGAS_AMOUNT = 3;

export const RecommendedMangas = ({ mangas }: Props) => {
  const [randomizedMangas, setRandomizedMangas] =
    useState<GET_ALL_MANGAS_QUERYResult>([]);

  useEffect(() => {
    const mainContainer = document.querySelector("section");
    if (mainContainer)
      if (mainContainer.getBoundingClientRect().width >= 1024)
        createVerticalMangasContainer(mangas, setRandomizedMangas);
      else if (mainContainer.getBoundingClientRect().width >= 640)
        createMobileMangasContainer(
          mangas,
          TABLET_MANGAS_AMOUNT,
          setRandomizedMangas
        );
      else
        createMobileMangasContainer(
          mangas,
          MOBILE_MANGAS_AMOUNT,
          setRandomizedMangas
        );
  }, []);

  return (
    <div className="flex lg:flex-col w-full lg:w-4/5 h-fit p-3 gap-4 rounded-lg bg-white/70">
      {randomizedMangas.map((manga) => (
        <article
          key={manga._id}
          className="flex flex-col w-full hover:brightness-110 transition-all">
          <Link
            href={manga.link!}
            target="_blank"
            className="flex flex-col gap-1">
            <div className="w-full lg:aspect-[220/320] h-60 relative">
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

const createVerticalMangasContainer = (
  mangas: GET_ALL_MANGAS_QUERYResult,
  setRandomizedMangas: Dispatch<SetStateAction<GET_ALL_MANGAS_QUERYResult>>
) => {
  const postsContainer = document.getElementById("posts-container");
  const OFFER_HEIGHT = 350;

  if (postsContainer) {
    const containerHeight = postsContainer.getBoundingClientRect().height;
    const mangasPerHeight = Math.ceil(containerHeight / OFFER_HEIGHT);

    if (mangasPerHeight > mangas.length) return setRandomizedMangas(mangas);

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
};

const createMobileMangasContainer = (
  mangas: GET_ALL_MANGAS_QUERYResult,
  amount: number,
  setRandomizedMangas: Dispatch<SetStateAction<GET_ALL_MANGAS_QUERYResult>>
) => {
  const selectedMangas: GET_ALL_MANGAS_QUERYResult = [];
  const selectedMangasIndex: number[] = [];

  while (selectedMangas.length < amount) {
    const idx = Math.floor(Math.random() * mangas.length);
    if (selectedMangasIndex.some((item) => item === idx)) continue;
    selectedMangasIndex.push(idx);
    selectedMangas.push(mangas[idx]);
  }
  setRandomizedMangas(selectedMangas);
};
