import { generateSlug } from "@/utils/generateSlug";
import { PortableTextReactComponents } from "next-sanity";
import { ReactNode } from "react";

const retrieveTextFromNode = (node: ReactNode) => {
  const firstChild = Array.isArray(node) ? node[0] : node;
  return typeof firstChild === "string" ? generateSlug(firstChild) : "";
};

export const BlockTextComponents = (): Partial<PortableTextReactComponents> => {
  return {
    block: {
      h2: ({ children }: { children?: ReactNode }) => {
        const slug = retrieveTextFromNode(children);
        return <h2 id={generateSlug(slug)}>{children}</h2>;
      },
      h3: ({ children }: { children?: ReactNode }) => {
        const slug = retrieveTextFromNode(children);
        return <h3 id={generateSlug(slug)}>{children}</h3>;
      },
      h4: ({ children }: { children?: ReactNode }) => {
        const slug = retrieveTextFromNode(children);
        return <h4 id={generateSlug(slug)}>{children}</h4>;
      },
      h5: ({ children }: { children?: ReactNode }) => {
        const slug = retrieveTextFromNode(children);
        return <h5 id={generateSlug(slug)}>{children}</h5>;
      },
      h6: ({ children }: { children?: ReactNode }) => {
        const slug = retrieveTextFromNode(children);
        return <h6 id={generateSlug(slug)}>{children}</h6>;
      },
    },
  };
};
