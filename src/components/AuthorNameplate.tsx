import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERYResult, SINGLE_POST_QUERYResult } from "@/sanity/types";
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
import Link from "next/link";

type AuthorNameplateProps = {
  author:
    | NonNullable<SINGLE_POST_QUERYResult>["author"]
    | NonNullable<POSTS_QUERYResult[number]>["author"];
  showSocials?: boolean;
  imageSize?: number;
};

export const AuthorNameplate = ({
  author,
  showSocials,
  imageSize = 24,
}: AuthorNameplateProps) => {
  if (!author) throw new Error("Post sem autor");

  return (
    <div className="flex flex-col gap-1">
      <div className="flex relative items-center gap-2">
        <Image
          src={urlFor(author.avatar as SanityImageSource).url()}
          alt={`${author.name} avatar`}
          width={imageSize}
          height={imageSize}
          className="rounded-full"
        />
        <span className="font-medium">{author.name}</span>
      </div>
      {/* TODO - Move socials to another component and rethink the logic to automate socials */}
      {showSocials && "socials" in author && (
        <div className="flex gap-2">
          {author.socials?.instagram && (
            <Link
              href={`https://instagram.com/${author.socials.instagram}`}
              target="_blank">
              <Image
                src={instagram}
                alt="Instagram icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.twitter && (
            <Link
              href={`https://x.com/${author.socials.twitter}`}
              target="_blank">
              <Image
                src={twitter}
                alt="X icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.bluesky && (
            <Link
              href={`https://bsky.app/${author.socials.bluesky}`}
              target="_blank">
              <Image
                src={bluesky}
                alt="BlueSky icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.anilist && (
            <Link
              href={`https://anilist.co/user/${author.socials.anilist}`}
              target="_blank">
              <Image
                src={anilist}
                alt="AniList icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.myanimelist && (
            <Link
              href={`https://myanimelist.net/profile/${author.socials.myanimelist}`}
              target="_blank">
              <Image
                src={myanimelist}
                alt="My Anime List icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.youtube && (
            <Link
              href={`https://youtube.com/${author.socials.youtube}`}
              target="_blank">
              <Image
                src={youtube}
                alt="YouTube icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.tiktok && (
            <Link
              href={`https://tiktok.com/@${author.socials.tiktok}`}
              target="_blank">
              <Image
                src={tiktok}
                alt="TikTok icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
          {author.socials?.spotify && (
            <Link
              href={`https://spotify.com/user/${author.socials.spotify}`}
              target="_blank">
              <Image
                src={spotify}
                alt="Spotify icon"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
