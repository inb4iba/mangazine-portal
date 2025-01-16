import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center text-zinc-800">
      <div className="flex justify-between xl:w-[1248px] py-6 items-center">
        <Link href="/" className="text-3xl font-bold italic">
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
