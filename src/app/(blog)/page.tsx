import { PostCard } from "@/components/PostCard";

export default function Home() {
  const data = [
    {
      _id: "1",
      description:
        "Preparem-se, pessoal! Nesse episódio, vou mergulhar em Sakamoto Days e compartilhar tudo o que achei desse anime incrível. Ação, comédia e muita opinião sincera te esperam.",
      title: "[Teste] Mangazine Podcast #07 - Sakamoto Days",
      created_at: "2025-01-16",
      cover: {
        asset: {
          _ref: "image-8897473a9d7cfa8c0df8701470b3899a51d77ca7-1000x1408-jpg",
        },
      },
      author: {
        _id: "1",
        name: "Icaro Andrade",
        avatar: {
          asset: {
            _ref: "image-6fa727d2f1cef502d5c9b1acc3f5d4a5da96976e-289x289-png",
          },
        },
      },
    },
    {
      _id: "2",
      description:
        "Confira os mangás lançados no Japão em janeiro de 2025! Novidades emocionantes, retornos aguardados e títulos que prometem agitar o cenário dos quadrinhos japoneses. Veja os destaques!",
      title: "[Teste] Mangás de janeiro/2025 no Japão",
      created_at: "2025-01-16",
      cover: {
        asset: {
          _ref: "image-0794f0a3108e63514c836d7478554d01026c9ccd-1280x720-jpg",
        },
      },
      author: {
        _id: "1",
        name: "Icaro Andrade",
        avatar: {
          asset: {
            _ref: "image-6fa727d2f1cef502d5c9b1acc3f5d4a5da96976e-289x289-png",
          },
        },
      },
    },
  ];

  return (
    <main className="flex justify-center">
      <div className="flex h-full xl:w-[1248px] mt-8">
        <section className="flex-grow flex flex-col gap-5">
          {data.map((post, idx) => (
            <PostCard addSeparator={idx !== 0} key={post._id} post={post} />
          ))}
        </section>
        <section className="w-64 bg-zinc-300"></section>
      </div>
    </main>
  );
}
