"use client";
import React from "react";
import ComponentResolver from "@/components/contentful/common/component-resolver";
import ReferenceFieldMapper from "@/components/contentful/common/reference-field-mapper";
import { Entry, EntryFields } from "contentful";
import { IHeroBannerProp } from "@/components/contentful/hero-banner-wrapper";
import { IDuplexSectionProp } from "@/components/contentful/duplex-section-wrapper.tsx";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

export interface IPageEntry extends Entry {
  fields: {
    title: EntryFields.Symbol;
    slug: EntryFields.Symbol;
    content: EntryFields.Array<IHeroBannerProp | IDuplexSectionProp>;
  };
}
interface ILandingPageProps {
  page: IPageEntry;
}

const LandingPage: React.FC<ILandingPageProps> = ({ page: rawPage }) => {
  const page = useContentfulLiveUpdates(
    rawPage
  ) || rawPage;
  if (!page) {
    return <>No content</>;
  }
  return (
    <div className="w-full text-xs   ">
      {/* <pre className="">{JSON.stringify(page, null, 2)}</pre> */}

      <h1 className="text-4xl mx-auto my-10 px-10">{page.fields.title}</h1>

      <ReferenceFieldMapper fields={page?.fields?.content} />
    </div>
  );
};

export default LandingPage;
