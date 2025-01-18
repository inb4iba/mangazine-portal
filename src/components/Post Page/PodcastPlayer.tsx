type Props = {
  url: string;
};

export const PodcastPlayer = ({ url }: Props) => {
  const embedUrl = url.replace("episode", "embed/episode");

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      width="100%"
      height="152"
      title="Spotify Embed: Tangenciando volume 03 #002 Anime Awards Brasil"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      src={embedUrl}></iframe>
  );
};
