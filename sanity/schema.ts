import { type SchemaTypeDefinition } from "sanity";

import tree from "./schemas/tree";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tree],
};
