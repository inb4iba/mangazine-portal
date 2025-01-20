import { roboto } from "@/app/fonts";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center text-zinc-800 top-0 sticky sm:relative z-50 bg-white/65 backdrop-blur-md sm:bg-transparent">
      <div className="flex flex-grow xl:flex-grow-0 justify-between xl:w-[1248px] p-4 items-center sm:p-8">
        <Link href="/" className={`${roboto.className} text-3xl font-black`}>
          mangazine
        </Link>
        <input
          type="search"
          placeholder="Pesquisar"
          name="search"
          id="search"
          className="outline-none focus:border-b border-zinc-800 hidden sm:block text-end bg-white/65 px-2 py-1 rounded-md"
        />
        <div className="w-12 aspect-square bg-zinc-600 sm:hidden"></div>
      </div>
    </header>
  );
};
