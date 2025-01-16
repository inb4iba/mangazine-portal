import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Author } from "./author";

export type PostSummary = {
  _id: string;
  description: string;
  title: string;
  created_at: string;
  cover: SanityImageSource;
  author: Author;
};
