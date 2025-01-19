import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (Rule) => Rule.required().max(24),
    }),
  ],
});
