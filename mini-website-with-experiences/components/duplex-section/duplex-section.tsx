"use client";
import React from "react";
import Link from "next/link";

interface IDuplexSectionProps {
  title: string;
  id: string;
  body: any;
  imagUrl: string;
  ctaLabel?: string;
  ctaLink?: string;
  ctaButtonVariant: "Primary" | "Secondary"
}

const DuplexSection: React.FC<IDuplexSectionProps> = ({
  title,
  body,
  imagUrl,
  ctaLabel,
  ctaLink,
  ctaButtonVariant,
  id = "",
}) => {
  return (
    <section
      data-contentful-entry-id={id}
      data-contentful-field-id={id}
      className=" body-font w-full"
    >
      <div className="containerx mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            data-contentful-entry-id={id}
            data-contentful-field-id={"title"}
            className="title-font sm:text-3xl text-2xl mb-4 font-medium "
          >
            {title}
          </h1>
          <div
            data-contentful-entry-id={id}
            data-contentful-field-id={"body"}
            className="mb-8 leading-relaxed"
          >
            {body}
          </div>
          {ctaLabel && ctaLink && (
            <div className="flex justify-center">
              <Link href={ctaLink} target="_blank">
                <button
                  data-contentful-entry-id={id}
                  data-contentful-field-id={"ctaButton"}
                  className={`inline-flex text-white ${ctaButtonVariant === "Primary" ? "bg-indigo-500": "bg-gray-500"}  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
                >
                  {ctaLabel}
                </button>
              </Link>
            </div>
          )}
        </div>
        {imagUrl && (
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt={`Hero banner image for ${title}`}
              src={imagUrl}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DuplexSection;
