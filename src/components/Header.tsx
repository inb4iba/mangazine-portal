import { roboto } from "@/app/fonts";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import { redirect } from "next/navigation";

export const Header = () => {
  const submitSearch = async (value: string) => {
    "use server";
    redirect(`/?s=${value}`);
  };

  return (
    <header className="flex justify-center text-zinc-800 top-0 sticky sm:relative z-50 bg-white/65 backdrop-blur-md sm:bg-transparent">
      <div className="flex flex-grow xl:flex-grow-0 justify-between xl:w-[1248px] p-4 items-center sm:p-6 xl:px-0">
        <Link
          href="/"
          className={`${roboto.className} text-3xl sm:text-5xl font-black`}>
          mangazine
        </Link>
        <SearchInput submitSearch={submitSearch} />
        <div className="w-12 aspect-square bg-zinc-600 sm:hidden"></div>
      </div>
    </header>
  );
};
