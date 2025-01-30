import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

const token = process.env.REVALIDATE_TOKEN;

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const receivedToken = headersList.get("REVALIDATE");

  if (receivedToken !== token)
    return new Response("Invalid signature!", {
      status: 401,
    });

  const { slug } = await req.json();

  revalidatePath("/");
  revalidatePath(`/posts/${slug}`);

  return new Response("Posts revalidated!", {
    status: 200,
  });
}

// export async function POST(req: NextRequest) {
//   //   const signature = req.headers[SIGNATURE_HEADER_NAME];
//   const signature = req.headers.get("SIGNATURE_HEADER_NAME");
//   const body = await readBody(req);
//   if (!(await isValidSignature(body, signature as string, secret!))) {
//     res.status(401).json({ success: false, message: "Invalid signature" });
//     return;
//   }

//   const jsonBody: bodyResponse = JSON.parse(body);

//   await res.revalidate("/");
//   await res.revalidate(`/posts/${jsonBody.slug}`);
//   res.json({ success: true });
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// async function readBody(readable: NextRequest) {
//   const chunks = [];
//   for await (const chunk of readable) {
//     chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
//   }
//   return Buffer.concat(chunks).toString("utf8");
// }

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
