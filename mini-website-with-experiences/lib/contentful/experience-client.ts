import * as contentful from "contentful";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CTF_SPACE_ID: string;
      NEXT_PUBLIC_CTF_DELIVERY_TOKEN: string;
      NEXT_PUBLIC_CTF_PREVIEW_TOKEN: string;
      NEXT_PUBLIC_CTF_ENVIRONMENT: string;
    }
  }
}

const SPACE_ID: string = process.env.NEXT_PUBLIC_CTF_SPACE_ID || "";
const ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_CTF_DELIVERY_TOKEN || "";
const PREVIEW_TOKEN: string = process.env.NEXT_PUBLIC_CTF_PREVIEW_TOKEN || "";
const ENVIRONMENT: string = process.env.NEXT_PUBLIC_CTF_ENVIRONMENT || "";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT,
});
export const previewClient = contentful.createClient({
  space: SPACE_ID,
  accessToken: PREVIEW_TOKEN,
  environment: ENVIRONMENT,
  host: "preview.contentful.com",
});

export default client;
