import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type Author = {
  _id: string;
  name: string;
  avatar: SanityImageSource;
};
