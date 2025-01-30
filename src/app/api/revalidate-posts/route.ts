import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import type { NextApiRequest, NextApiResponse } from "next";

const secret = process.env.REVALIDATE_TOKEN;

type bodyResponse = {
  slug: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req);
  if (!(await isValidSignature(body, signature as string, secret!))) {
    res.status(401).json({ success: false, message: "Invalid signature" });
    return;
  }

  const jsonBody: bodyResponse = JSON.parse(body);
  await res.revalidate("/");
  await res.revalidate(`/posts/${jsonBody.slug}`);
  res.json({ success: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readBody(readable: NextApiRequest) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

//   try {
//     // This should be the actual path not a rewritten path
//     // e.g. for "/posts/[id]" this should be "/posts/1"
//     await res.revalidate('/posts/1')
//     return res.json({ revalidated: true })
//   } catch (err) {
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     return res.status(500).send('Error revalidating')
//   }
