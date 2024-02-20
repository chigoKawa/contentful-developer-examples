import { client } from "./client";
import * as contentful from "contentful";
import type {
  EntrySkeletonType
} from "contentful";
import { IHeroBannerProp } from "@/components/contentful/hero-banner-wrapper";
import { IDuplexSectionProp } from "@/components/contentful/duplex-section-wrapper.tsx";

const CONTENT_TYPE_NAME = "landingPage"

const INCLUDES_COUNT = 6

export type HeroBannerSkeleton = {
  contentTypeId: "heroBanner";
  fields: IHeroBannerProp["fields"]
};

export type DuplexSectionSkeleton = {
  contentTypeId: "heroBanner";
  fields: IDuplexSectionProp["fields"]
};

export type PageEntrySkeleton = {
  contentTypeId: "landingPage";
  fields: {
    // internalName: contentful.EntryFieldTypes.Text;
    internalName: contentful.EntryFields.Symbol;
    title: contentful.EntryFields.Symbol;
    slug: contentful.EntryFields.Symbol;
    content?: contentful.EntryFields.Array<
    contentful.EntryFields.EntryLink<HeroBannerSkeleton | DuplexSectionSkeleton>
  >;
  };
};

export interface IPageFields {
  title: string;
  slug: string;
  // pageType: string;
  seo?: any;
  sections: any;
  hero?: any;
}

export interface IPageEntry extends IPageFields {
  sys?: any;
}

export interface IPage extends EntrySkeletonType {
  fields: IPageFields;
}

export const fetchPages = async () => {
  return client().getEntries<PageEntrySkeleton>({
    content_type: "landingPage",
    include: INCLUDES_COUNT
  });
};



export const fetchPageWithSlug = async ({
  slug,
  preview = false,
}: {
  slug: string;
  preview?: boolean;
}) => {
  try {
    const response = await client(preview).getEntries({
      content_type: CONTENT_TYPE_NAME,
      "fields.slug": slug,
      include: INCLUDES_COUNT,
    });
    return response.items?.[0];
  } catch (error) {
    return null;
  }
};
