import { defineField, defineType } from "sanity";

export const mangaType = defineType({
  name: "manga",
  title: "Mangá",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      type: "string",
      title: "URL da imagem",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      type: "string",
      title: "Link de afiliado",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
