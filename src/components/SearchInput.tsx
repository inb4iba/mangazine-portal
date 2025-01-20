"use client";

import { KeyboardEvent } from "react";

type Props = {
  submitSearch: (value: string) => void;
};

export const SearchInput = ({ submitSearch }: Props) => {
  const onKeyRelease = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    submitSearch((e.target as HTMLInputElement).value);
  };

  return (
    <input
      type="search"
      placeholder="Pesquisar"
      name="search"
      id="search"
      className="outline-none focus:border-b border-zinc-800 hidden sm:block bg-white/65 px-2 py-1 rounded-md"
      onKeyUp={onKeyRelease}
    />
  );
};
