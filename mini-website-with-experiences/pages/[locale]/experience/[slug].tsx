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
  experienceJSON,
  stylesheet,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log("parsedExperience", experienceJSON);
  return (
    <div className="w-full">
      {stylesheet && (
        <Head>
          <style data-ssg>{stylesheet}</style>
        </Head>
      )}
      <ContentfulPageSeo
        seo={experienceJSON?.entityStore?._experienceEntry?.seo}
      />
      {/* <pre className="">{JSON.stringify(parsedExperience, null ,2)}</pre> */}
      <div className=" w-full">
        <Nav />
      </div>
      <div className="min-h-screen w-full">
        <ExperienceRoot experience={experienceJSON} locale={localeCode} />
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
  const experience = await fetchBySlug({
    client: true ? previewClient : client, // TBD use the preview state to determine the client
    slug: query?.slug?.toString() || "", //could be fetched from the context
    experienceTypeId,
    localeCode: params?.locale?.toString() || localeCode,
  });

  // extract the styles from the experience
  const stylesheet = experience ? detachExperienceStyles(experience) : null;

  // experience currently needs to be stringified manually to be passed to the component
  const experienceJSON: any = experience ? JSON.stringify(experience) : null;

  // const experienceData = experience?.entityStore?.entities.find(
  //   (entity) =>
  //     entity?.sys?.type === "Entry" &&
  //     // entity?.sys?.contentType?.sys?.id === experienceTypeId &&
  //     entity?.fields?.slug
  // );

  // console.log("CHIGORIDDIM", experienceData?.sys);

  return {
    props: {
      experienceJSON,
      stylesheet,
    },
  };
};

export default Page;
