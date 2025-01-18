import { roboto } from "@/app/(blog)/layout";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center text-zinc-800 relative">
      <div className="flex justify-between xl:w-[1248px] py-6 items-center">
        <Link href="/" className={`${roboto.className} text-3xl font-black`}>
          mangazine
        </Link>
        <input
          type="search"
          placeholder="Pesquisar"
          name="search"
          id="search"
          className="outline-none focus:border-b border-zinc-800"
        />
      </div>
    </header>
  );
};
