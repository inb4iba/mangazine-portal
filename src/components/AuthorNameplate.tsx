import { urlFor } from "@/sanity/lib/image";
import { SINGLE_POST_QUERYResult } from "@/sanity/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

import anilist from "@/socials/anilist.png";
import instagram from "@/socials/instagram.svg";
import twitter from "@/socials/X Logo.svg";
import bluesky from "@/socials/bluesky.svg";
import myanimelist from "@/socials/myanimelist.svg";
import youtube from "@/socials/youtube.svg";
import tiktok from "@/socials/TikTok.svg";
import spotify from "@/socials/spotify.svg";

type AuthorNameplateProps = {
  author: NonNullable<SINGLE_POST_QUERYResult>["author"];
  showSocials?: boolean;
};

export const AuthorNameplate = ({
  author,
  showSocials,
}: AuthorNameplateProps) => {
  if (!author) throw new Error("Post sem autor");

  return (
    <>
      <div className="flex relative items-center gap-2">
        <Image
          src={urlFor(author.avatar as SanityImageSource).url()}
          alt={`${author.name} avatar`}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="font-medium">{author.name}</span>
      </div>
      {showSocials && (
        <div className="flex gap-2">
          {author.socials?.instagram && (
            <Image
              src={instagram}
              alt="Instagram icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.twitter && (
            <Image
              src={twitter}
              alt="X icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.bluesky && (
            <Image
              src={bluesky}
              alt="BlueSky icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.anilist && (
            <Image
              src={anilist}
              alt="AniList icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.myanimelist && (
            <Image
              src={myanimelist}
              alt="My Anime List icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.youtube && (
            <Image
              src={youtube}
              alt="YouTube icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.tiktok && (
            <Image
              src={tiktok}
              alt="TikTok icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
          {author.socials?.spotify && (
            <Image
              src={spotify}
              alt="Spotify icon"
              width={24}
              height={24}
              className="rounded-full"
            />
          )}
        </div>
      )}
    </>
  );
};
