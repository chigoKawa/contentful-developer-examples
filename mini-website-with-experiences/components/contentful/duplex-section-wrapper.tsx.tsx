"use client";
import React from "react";
import { Entry, EntryFields, Asset } from "contentful";
import Herobanner from "../hero-banner/hero-banner";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import DuplexSection from "../duplex-section/duplex-section";

export interface IDuplexSectionProp extends Entry {
  fields: {
    title: EntryFields.Symbol;
    subtitle: EntryFields.Symbol;
    image: Asset;
    content: EntryFields.RichText;
    ctaButton: EntryFields.Symbol;
    ctaButtonLink: EntryFields.Symbol;
    ctaButtonVariant: EntryFields.Symbol<"Primary" | "Secondary">;
  };
}

const DuplexSectionWrapper: React.FC<IDuplexSectionProp> = (entry) => {
  return (
    <div className="mb-2 max-w-screen-lg mx-auto">
      {entry?.sys?.id}
      <DuplexSection
        id={entry?.sys?.id}
        imagUrl={entry.fields.image.fields.file?.url?.toString() || ""}
        title={entry.fields.title}
        body={documentToReactComponents(entry.fields.content)}
        ctaLabel={entry.fields.ctaButton}
        ctaLink={entry.fields.ctaButtonLink}
        ctaButtonVariant={entry.fields.ctaButtonVariant}
      />
      {/* <pre className="m-auto px-10 w-80x h-60 overflow-scroll">{JSON.stringify(entry?.fields, null, 2)}</pre> */}
    </div>
  );
};

export default DuplexSectionWrapper;
