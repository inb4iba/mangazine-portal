import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { postType } from "./postType";
import { tagType } from "./tagTypes";
import { socialsType } from "./objects/socials";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, postType, tagType, socialsType],
};
