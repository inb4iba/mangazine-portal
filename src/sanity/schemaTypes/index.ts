import { type SchemaTypeDefinition } from 'sanity'
import { authorType } from './authorType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, postType],
}
