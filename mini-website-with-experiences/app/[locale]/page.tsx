

import * as contentful from "contentful";
import dynamic from 'next/dynamic';
import {
  fetchBySlug,
  ExperienceRoot,
  createExperience,
} from '@contentful/experiences-sdk-react';
import type { Metadata, ResolvingMetadata } from "next";
import client from "@/lib/contentful/experience-client";


const ExperienceLayout = dynamic(()=>import("@/components/experiences/layout/layout"))


type MetadataProps = {
  params: { category: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


const HOMEPAGE_SLUG = "homepage"
const experienceTypeId = "layout";
const localeCode = 'en-US';


export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  // read route params
  const { slug } = params;
  const entries = await client.getEntries({
    content_type: experienceTypeId,
    "fields.slug": HOMEPAGE_SLUG,
  });

  const entry = entries?.items?.[0]
  const title = entry?.fields?.title
  const description  = entry?.fields?.description || ""

  // fetch data
  // const experience = await fetchBySlug({
  //   client,
  //   slug: HOMEPAGE_SLUG, 
  //   experienceTypeId,
  //   localeCode,
  // });

  // //Serialize the experience manually
  // const experienceJSON = JSON.stringify(experience);


  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: `Experience Demo | ${title}`,
    description : `${description}`,
  };
}






// const SPACE_ID: string = process.env.NEXT_PUBLIC_CTF_SPACE_ID || "";
// const ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_CTF_DELIVERY_TOKEN || "";
// const PREVIEW_TOKEN: string = process.env.NEXT_PUBLIC_CTF_PREVIEW_TOKEN || "";
// const ENVIRONMENT: string = process.env.NEXT_PUBLIC_CTF_ENVIRONMENT || "";

// const client = contentful.createClient({
//   space: SPACE_ID,
//   accessToken: ACCESS_TOKEN,
//   environment: ENVIRONMENT,
// });

export default  async function Home() {
  const entries = await client.getEntries({
    content_type: experienceTypeId,
    "fields.slug": HOMEPAGE_SLUG,
  });

 
  const entry = entries?.items?.[0]
 
  return (
    <main className="w-full min-h-screen  py-24">
     <ExperienceLayout experienceEntry={entry} slug={HOMEPAGE_SLUG} />
    </main>
  );
}
