import { defineField, defineType } from "sanity";

export const socialsType = defineType({
  name: "socials",
  type: "object",
  fields: [
    defineField({
      name: "bluesky",
      title: "Bluesky",
      type: "string",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "anilist",
      title: "Anilist",
      type: "string",
    }),
    defineField({
      name: "myanimelist",
      title: "MyAnimeList",
      type: "string",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "string",
    }),
    defineField({
      name: "tiktok",
      title: "TikTok",
      type: "string",
    }),
    defineField({
      name: "spotify",
      title: "Spotify",
      type: "string",
    }),
  ],
});
