"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";

type Props = {
  submitSearch: (value: string) => void;
};

export const SearchInput = ({ submitSearch }: Props) => {
  const [mobileVisibility, setMobileVisibility] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mobileVisibility) searchInputRef.current?.focus();
  }, [mobileVisibility]);

  const onKeyRelease = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    submitSearch((e.target as HTMLInputElement).value);
  };

  const showSearchInput = () => {
    setMobileVisibility(true);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Pesquisar"
        name="search"
        id="search"
        className={`${mobileVisibility ? "" : "hidden"} sm:block absolute sm:relative inset-0 outline-none sm:focus:border-b border-zinc-800 sm:bg-white/65 p-4 sm:px-2 sm:py-1 sm:rounded-md`}
        onKeyUp={onKeyRelease}
        onBlur={() => setMobileVisibility(false)}
        ref={searchInputRef}
      />
      <div
        className="flex justify-center items-centerw-12 w-8 bg-red-500 aspect-square sm:hidden"
        onClick={showSearchInput}></div>
    </>
  );
};
