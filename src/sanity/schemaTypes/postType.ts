import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fieldsets: [
    {
      name: "_presentation",
      title: "Apresentação da Postagem",
    },
    { name: "_body", title: "Detalhes da Postagem" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      fieldset: "_presentation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "_presentation",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "string",
      fieldset: "_presentation",
      validation: (Rule) => Rule.required().max(256),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "reference",
      to: [{ type: "tag" }],
      fieldset: "_presentation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cover",
      title: "Capa",
      type: "image",
      fieldset: "_presentation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "created_at",
      title: "Data da publicação",
      type: "date",
      fieldset: "_presentation",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
      fieldset: "_presentation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "proofreaders",
      title: "Revisores",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
      fieldset: "_presentation",
    }),
    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "string",
      fieldset: "_body",
      validation: (Rule) => Rule.required().max(128),
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
      fieldset: "_body",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mangas",
      title: "Mangás",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "manga" }],
        },
      ],
      fieldset: "_body",
    }),
    defineField({
      name: "podcast",
      title: "Spotify URL",
      type: "string",
      fieldset: "_body",
    }),
  ],
});
