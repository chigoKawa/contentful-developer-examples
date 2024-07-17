import React, { ReactElement } from "react";
import Head from "next/head";
import { createClient } from "contentful";
import {
  fetchBySlug,
  ExperienceRoot,
  createExperience,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import ExperienceComponentRegistration from "@/components/experiences/layout/experience-component-registration";
import client from "@/lib/contentful/experience-client";
import ContentfulPageSeo from "@/lib/contentful/contentful-page-seo";

const SPACE_ID: string = process.env.NEXT_PUBLIC_CTF_SPACE_ID || "";
const ACCESS_TOKEN: string = process.env.NEXT_PUBLIC_CTF_DELIVERY_TOKEN || "";
const PREVIEW_TOKEN: string = process.env.NEXT_PUBLIC_CTF_PREVIEW_TOKEN || "";
const ENVIRONMENT: string = process.env.NEXT_PUBLIC_CTF_ENVIRONMENT || "";

const experienceTypeId = "layout"; //Content type id for the experience
const localeCode = "en-US";
const SLUG = "homepage";

const Page = ({
  experienceJSON,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const experience = createExperience(experienceJSON);

  const parsedExperience = JSON.parse(experienceJSON);
  return (
    <div className="w-full">
      <ContentfulPageSeo
        seo={parsedExperience?.entityStore?._experienceEntry?.seo}
      />

      <ExperienceRoot experience={experience} locale={"en-US"} />
    </div>
  );
};

export const getServerSideProps = async ({
  params,
  preview,
  query,
}: GetServerSidePropsContext) => {
  console.log("zap", preview);
  const experience = await fetchBySlug({
    client,
    slug: SLUG, //could be fetched from the context
    experienceTypeId,
    localeCode: params?.locale?.toString() || "en-US",
  });

  //Serialize the experience manually
  const experienceJSON = JSON.stringify(experience);

  return {
    props: {
      experienceJSON: experienceJSON,
    },
  };
};

export default Page;
