import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post"]{
    _id,
    title,
    description,
    cover,
    created_at,
    author -> {
        _id,
        name,
        avatar
    }
}`)