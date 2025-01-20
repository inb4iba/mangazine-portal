"use client";

import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  posts: POSTS_QUERYResult;
};

export const Carosel = ({ posts }: Props) => {
  const [selected, setSelected] = useState(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  useEffect(() => {
    if (!autoplay) return;

    const timeoutHandler = setTimeout(() => {
      setSelected((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearTimeout(timeoutHandler);
  }, [autoplay, selected]);

  const updateSelection = (idx: number) => {
    setSelected(idx);
    setAutoplay(false);
  };

  const startAutoplay = () => {
    setAutoplay(true);
  };

  return (
    <section
      className="flex w-full h-96 relative"
      onMouseLeave={() => {
        startAutoplay();
      }}>
      {posts.map((post, idx) => {
        return (
          <div
            className={`relative flex transition-all duration-700 ${idx === 0 ? "" : "border-l-4"} ${idx === selected ? "flex-[8]" : "flex-1"} h-full border-white border-out`}
            key={post._id}
            onMouseEnter={() => updateSelection(idx)}>
            <Image
              src={urlFor(post.cover as SanityImageSource).url()}
              alt="cover image"
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 ${idx === selected ? "opacity-0" : "opacity-25"} bg-violet-500 hover:cursor-pointer`}></div>
          </div>
        );
      })}
    </section>
  );
};
