"use client";
import {
  ExperienceRoot,
  useFetchBySlug,
  createExperience,

} from "@contentful/experiences-sdk-react";
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

import * as contentful from "contentful";

const SPACE_ID: string = process.env.NEXT_PUBLIC_CTF_SPACE_ID || "";
const ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_CTF_DELIVERY_TOKEN || "";
const PREVIEW_TOKEN: string = process.env.NEXT_PUBLIC_CTF_PREVIEW_TOKEN || "";
const ENVIRONMENT: string = process.env.NEXT_PUBLIC_CTF_ENVIRONMENT || "";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT,
});

const experienceTypeId = "layout"; //Content type id for the experience
const localeCode = "en-US";


const ExperienceLayout = ({slug, experienceEntry}: {slug: string; experienceEntry: any}) => {
  const locale = useCurrentLocale(i18nConfig);
  
  const { experience, isLoading, error } = useFetchBySlug({
    client,
    slug,
    experienceTypeId,
    localeCode: locale ? locale === "en" ? "en-US" : locale : "en-US",
  });


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-full h-full flex flex-col relative ">
      {/* {JSON.stringify(experience2)} */}

      <ExperienceRoot experience={experience} locale={localeCode} />
    </div>
  );
};

export default ExperienceLayout;
