import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fieldsets: [
    {
      name: "socials",
      title: "Redes Sociais",
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bluesky",
      title: "Bluesky",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "anilist",
      title: "Anilist",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "myanimelist",
      title: "MyAnimeList",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "tiktok",
      title: "TikTok",
      type: "string",
      fieldset: "socials",
    }),
    defineField({
      name: "spotify",
      title: "Spotify",
      type: "string",
      fieldset: "socials",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar",
    },
  },
});
