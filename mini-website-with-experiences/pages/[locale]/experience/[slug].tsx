import ContentfulPageSeo from "@/lib/contentful/contentful-page-seo";
import client, { previewClient } from "@/lib/contentful/experience-client";
import {
  ExperienceRoot,
  createExperience,
  fetchBySlug,
  
} from "@contentful/experiences-sdk-react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";



const experienceTypeId = process.env.NEXT_PUBLIC_CTFL_EXPERIENCE_TYPE!; //Content type id for the experience
const localeCode = "en-US";
const SLUG = "homepage";

const Page = ({
  experienceJSON,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const experience = createExperience(experienceJSON);
  const parsedExperience = JSON.parse(experienceJSON);
  console.log("parsedExperience", parsedExperience)
  return (
    <div className="w-full">
 
      <ContentfulPageSeo
        seo={parsedExperience?.entityStore?._experienceEntry?.seo}
      />
      {/* <pre className="">{JSON.stringify(parsedExperience, null ,2)}</pre> */}
      
      <div className="bg-red-200 h-20 w-full">Nav</div>
      <ExperienceRoot experience={experience} locale={localeCode} />
      Dynamic content
      Footer
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

  //Serialize the experience manually
  const experienceJSON = JSON.stringify(experience);

  return {
    props: {
      experienceJSON: experienceJSON,
    },
  };
};

export default Page;
