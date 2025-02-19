import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post"] | order(created_at desc)[0..$perPage]{
    _id,
    title,
    description,
    cover,
    created_at,
    "slug": slug.current,
    "tag": tag->tag,
    "mangas": mangas[]-> {
      _id,
      title,
      link,
      imageUrl
    },
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
    "tag": tag->tag,
    "mangas": mangas[]-> {
      _id,
      title,
      link,
      imageUrl
    },
    author -> {
        _id,
        name,
        avatar
    }
}`);

export const FILTER_POSTS_BY_TAG_QUERY =
  defineQuery(`*[_type == "post" && tag->tag == $postTag] | order(created_at desc)[($page - 1) * $perPage..(($page * $perPage) - 1)]{
    _id,
    title,
    description,
    cover,
    created_at,
    "slug": slug.current,
    "tag": tag->tag,
    "mangas": mangas[]-> {
      _id,
      title,
      link,
      imageUrl
    },
    author -> {
        _id,
        name,
        avatar
    }
}`);

export const FILTER_POSTS_BY_SEARCH_QUERY =
  defineQuery(`*[_type == "post" && (tag->tag match $s + "*" || title match $s + "*" || description match $s + "*")] | order(created_at desc)[($page - 1) * $perPage..(($page * $perPage) - 1)]{
    _id,
    title,
    description,
    cover,
    created_at,
    "slug": slug.current,
    "tag": tag->tag,
    "mangas": mangas[]-> {
      _id,
      title,
      link,
      imageUrl
    },
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
    description,
    podcast,
    created_at,
    body,
    subtitle,
    "tag": tag->tag,
    "mangas": mangas[]-> {
      _id,
      title,
      link,
      imageUrl
    },
    "proofreaders": proofreaders[]-> {
      _id,
      name,
      avatar,
      socials
    },
    author -> {
      _id,
      name,
      avatar,
      socials
    }
  }[0]`);

export const COUNT_POSTS_QUERY = defineQuery(
  `count(*[_type == "post" && !(_id in path('drafts.**'))])`
);

export const GET_ALL_MANGAS_QUERY = defineQuery(
  `*[_type == "manga"]{
    _id,
    title,
    imageUrl,
    link
  }`
);
