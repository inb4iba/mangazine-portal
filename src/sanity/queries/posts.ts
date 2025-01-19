import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post"] | order(created_at desc)[0..$perPage]{
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

export const PAGINATING_POSTS_QUERY =
  defineQuery(`*[_type == "post"] | order(created_at desc)[($page - 1) * $perPage..(($page * $perPage) - 1)]{
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

export const SINGLE_POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug]{
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

export const COUNT_POSTS_QUERY = defineQuery(
  `count(*[_type == "post" && !(_id in path('drafts.**'))])`
);
