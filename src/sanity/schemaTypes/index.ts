import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { postType } from "./postType";
import { tagType } from "./tagTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, postType, tagType],
};
