import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.documentTypeListItem("author").title("Autores"),
      S.documentTypeListItem("manga").title("Mangás"),
      S.documentTypeListItem("post").title("Postagens"),
      S.documentTypeListItem("tag").title("Tags"),
    ]);
