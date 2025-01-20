"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  coverUrl: string;
  title: string;
  subtitle: string;
};

export const PostCoverImage = ({ coverUrl, title, subtitle }: Props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-96 rounded-b-3xl lg:rounded-3xl">
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

      <div className="bg-gradient-to-b from-transparent via-30% via-transparent to-80% to-zinc-900 opacity-90 absolute w-full h-full z-20 flex flex-col justify-end p-4 sm:px-8 sm:py-6 gap-2">
        <h1 className="text-2xl font-bold lg:text-4xl lg:w-3/4 text-zinc-100">
          {title}
        </h1>
        <p className="text-zinc-100 lg:text-lg lg:w-3/4">{subtitle}</p>
      </div>
    </section>
  );
};
