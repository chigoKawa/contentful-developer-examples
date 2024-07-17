"use client";
import React from "react";
import { Entry, EntryFields, Asset } from "contentful";
import Herobanner from "../hero-banner/hero-banner";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export interface IHeroBannerProp extends Entry {
  fields: {
    internalName: EntryFields.Symbol;
    headline: EntryFields.Symbol;
 
    image: Asset;
    body: EntryFields.RichText;
  };
}



const HeroBannerWrapper: React.FC<IHeroBannerProp> = (entry) => {
  const imgUrl = entry.fields.image.fields.file?.url?.toString()
  const imgSrc = imgUrl ?`https:${imgUrl}` : ""
  return (
    <div className="mb-4">
      <Herobanner
        imagUrl={imgSrc}
        title={entry.fields.headline}
       
        body={documentToReactComponents(entry.fields.body)}
      />
      {/* <pre className="m-auto px-10 w-80x h-60 overflow-scroll">{JSON.stringify(entry?.fields, null, 2)}</pre> */}
    </div>
  );
};

export default HeroBannerWrapper;
