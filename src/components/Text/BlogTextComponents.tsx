import { generateSlug } from "@/utils/generateSlug";

export const BlockTextComponents = {
  types: {},
  list: {},
  block: {
    h2: ({ children }: any) => {
      return <h2 id={generateSlug(children[0])}>{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 id={generateSlug(children[0])}>{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 id={generateSlug(children[0])}>{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h5 id={generateSlug(children[0])}>{children}</h5>;
    },
    h6: ({ children }: any) => {
      return <h6 id={generateSlug(children[0])}>{children}</h6>;
    },
  },
  marks: {},
};
