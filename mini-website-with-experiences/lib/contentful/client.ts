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

 const deliveryClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT,
});

 const previewClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: PREVIEW_TOKEN,
  environment: ENVIRONMENT,
  host: "preview.contentful.com",
});



export const client = (preview = false) => {
  return preview ? previewClient : deliveryClient as typeof deliveryClient;
};






