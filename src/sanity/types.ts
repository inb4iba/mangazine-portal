/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Manga = {
  _id: string;
  _type: "manga";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  imageUrl?: string;
  link?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  tag?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "tag";
  };
  cover?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  created_at?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  proofreaders?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "author";
  }>;
  subtitle?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  mangas?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "manga";
  }>;
  podcast?: string;
};

export type Tag = {
  _id: string;
  _type: "tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  tag?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  avatar?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  socials?: Socials;
};

export type Socials = {
  _type: "socials";
  bluesky?: string;
  twitter?: string;
  instagram?: string;
  anilist?: string;
  myanimelist?: string;
  youtube?: string;
  tiktok?: string;
  spotify?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Manga | Post | Tag | Slug | Author | Socials | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/queries/posts.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post"] | order(created_at desc)[0..$perPage]{    _id,    title,    description,    cover,    created_at,    "slug": slug.current,    "tag": tag->tag,    "mangas": mangas[]-> {      _id,      title,      link,      imageUrl    },    author -> {        _id,        name,        avatar    }}
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  description: string | null;
  cover: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  created_at: string | null;
  slug: string | null;
  tag: string | null;
  mangas: Array<{
    _id: string;
    title: string | null;
    link: string | null;
    imageUrl: string | null;
  }> | null;
  author: {
    _id: string;
    name: string | null;
    avatar: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: SINGLE_POST_QUERY
// Query: *[_type == "post" && slug.current == $slug]{    _id,    cover,    title,    description,    podcast,    created_at,    body,    subtitle,    "tag": tag->tag,    "mangas": mangas[]-> {      _id,      title,      link,      imageUrl    },    "proofreaders": proofreaders[]-> {      _id,      name,      avatar,      socials    },    author -> {      _id,      name,      avatar,      socials    }  }[0]
export type SINGLE_POST_QUERYResult = {
  _id: string;
  cover: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  title: string | null;
  description: string | null;
  podcast: string | null;
  created_at: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  subtitle: string | null;
  tag: string | null;
  mangas: Array<{
    _id: string;
    title: string | null;
    link: string | null;
    imageUrl: string | null;
  }> | null;
  proofreaders: Array<{
    _id: string;
    name: string | null;
    avatar: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    socials: Socials | null;
  }> | null;
  author: {
    _id: string;
    name: string | null;
    avatar: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    socials: Socials | null;
  } | null;
} | null;
// Variable: COUNT_POSTS_QUERY
// Query: count(*[_type == "post" && !(_id in path('drafts.**'))])
export type COUNT_POSTS_QUERYResult = number;
// Variable: GET_ALL_MANGAS_QUERY
// Query: *[_type == "manga"]{    _id,    title,    imageUrl,    link  }
export type GET_ALL_MANGAS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  imageUrl: string | null;
  link: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"post\"] | order(created_at desc)[0..$perPage]{\n    _id,\n    title,\n    description,\n    cover,\n    created_at,\n    \"slug\": slug.current,\n    \"tag\": tag->tag,\n    \"mangas\": mangas[]-> {\n      _id,\n      title,\n      link,\n      imageUrl\n    },\n    author -> {\n        _id,\n        name,\n        avatar\n    }\n}": POSTS_QUERYResult;
    "*[_type == \"post\" && slug.current == $slug]{\n    _id,\n    cover,\n    title,\n    description,\n    podcast,\n    created_at,\n    body,\n    subtitle,\n    \"tag\": tag->tag,\n    \"mangas\": mangas[]-> {\n      _id,\n      title,\n      link,\n      imageUrl\n    },\n    \"proofreaders\": proofreaders[]-> {\n      _id,\n      name,\n      avatar,\n      socials\n    },\n    author -> {\n      _id,\n      name,\n      avatar,\n      socials\n    }\n  }[0]": SINGLE_POST_QUERYResult;
    "count(*[_type == \"post\" && !(_id in path('drafts.**'))])": COUNT_POSTS_QUERYResult;
    "*[_type == \"manga\"]{\n    _id,\n    title,\n    imageUrl,\n    link\n  }": GET_ALL_MANGAS_QUERYResult;
  }
}
