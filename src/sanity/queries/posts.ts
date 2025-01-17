import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post"]{
    _id,
    title,
    description,
    cover,
    created_at,
    "slug": slug.current,
    author -> {
        _id,
        name,
        avatar
    }
}`);

export const SINGLE_POST_QUERY = (slug: string) =>
  defineQuery(`*[_type == "post" && slug.current == "${slug}"]{
  _id,
  cover,
  title,
  podcast,
  created_at,
  body,
  author -> {
    _id,
    name,
    avatar
  }
}[0]`);
