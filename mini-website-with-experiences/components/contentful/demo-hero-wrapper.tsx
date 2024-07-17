"use client";
import React from "react";
import { Entry, EntryFields, Asset } from "contentful";
import Herobanner from "../hero-banner/hero-banner";
import DemoHero from "../demo-hero/demo-hero";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export interface IDemoHeroProp extends Entry {
  fields: {
    internalName: EntryFields.Symbol;
    headline: EntryFields.Symbol;
    subTitle: EntryFields.Symbol;
    image: Asset;
    body: EntryFields.RichText;
    buttonLabel: EntryFields.Symbol;
    buttonTarget: any;
    buttonVariant: EntryFields.Symbol<"Primary" | "Secondary" | "Dark">;
    heroSize: EntryFields.Symbol<"Small" | "Medium" | "Large">;
  };
}


const DemoHeroWrapper: React.FC<IDemoHeroProp> = (entry) => {
  const imgUrl = entry.fields.image.fields.file?.url?.toString()
  const imgSrc = imgUrl ?`https:${imgUrl}` : ""
  return (
    <div className="mb-4">
  
      <DemoHero
        imagUrl={imgSrc}
        title={entry.fields.headline}
        body={documentToReactComponents(entry.fields.body)}
        subTitle={entry.fields.subTitle}
        buttonLabel={entry.fields.buttonLabel}
        buttonVariant={entry.fields.buttonVariant}
        heroSize={entry.fields.heroSize}
      />
    </div>
  );
};

export default DemoHeroWrapper;
