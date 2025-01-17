"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  coverUrl: string;
  title: string;
};

export const PostCoverImage = ({ coverUrl, title }: Props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-red-500 w-full h-96 rounded-b-3xl relative overflow-hidden">
      <Image
        src={coverUrl}
        alt="cover image"
        fill
        className="object-cover"
        style={{
          objectPosition: `center ${25 + offset * 0.08}%`,
          transition: "object-position 0.05s linear",
        }}
      />

      <div className="bg-gradient-to-b from-transparent via-30% via-transparent to-80% to-zinc-900 opacity-90 absolute w-full h-full z-50 flex flex-col justify-end px-8 py-4 gap-2">
        <h1 className="text-5xl text-zinc-100 font-bold w-10/12">{title}</h1>
        <p className="text-zinc-100 text-xl w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda
          fugit hic ullam libero sunt consectetur qui consequatur ea.
        </p>
      </div>
    </section>
  );
};
