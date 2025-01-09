import ContentfulPageSeo from "@/lib/contentful/contentful-page-seo";
import Nav from "@/components/nav/nav";
import client, { previewClient } from "@/lib/contentful/experience-client";
import {
  ExperienceRoot,
  createExperience,
  fetchBySlug,
  detachExperienceStyles,
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Footer from "@/components/nav/footer";
import Head from "next/head";

const experienceTypeId = process.env.NEXT_PUBLIC_CTFL_EXPERIENCE_TYPE!; //Content type id for the experience
const localeCode = "en-US";
const SLUG = "homepage";

const Page = ({
  experienceEntryJSON,
  experienceStyles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("parsedExperience", experienceEntryJSON);
  return (
    <div className="w-full">
      {experienceStyles && (
        <Head>
          <style data-ssg>{experienceStyles}</style>
        </Head>
      )}
      <ContentfulPageSeo
        seo={experienceEntryJSON?.entityStore?._experienceEntry?.seo}
      />
      {/* <pre className="">{JSON.stringify(parsedExperience, null ,2)}</pre> */}
      <div className=" w-full">
        <Nav />
      </div>

      <div className="min-h-screen w-full">
        <ExperienceRoot experience={experienceEntryJSON} locale={localeCode} />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params,
  query,
  draftMode,
  preview,
  previewData,
}: GetServerSidePropsContext) => {
  const experienceEntry = await fetchBySlug({
    client: true ? previewClient : client, // TBD use the preview state to determine the client
    slug: query?.slug?.toString() || "", //could be fetched from the context
    experienceTypeId,
    localeCode: params?.locale?.toString() || localeCode,
  });

  if (!experienceEntry) {
    return {
      notFound: true,
    };
  }

  // extract the styles from the experience
  const experienceStyles = experienceEntry
    ? detachExperienceStyles(experienceEntry)
    : null;

  // experience currently needs to be stringified manually to be passed to the component
  const experienceEntryJSON: any = experienceEntry
    ? JSON.stringify(experienceEntry)
    : null;

  return {
    props: {
      experienceEntryJSON,
      experienceStyles,
    },
  };
};

export default Page;
