import React from "react";
import Head from "next/head";

const ContentfulPageSeo = ({ seo }: { seo: any }) => {
  const noindex = seo?.fields?.noIndex
  const noFollow = seo?.fields?.noFollow
  return (
    <Head>
      <title>{seo?.fields?.title}</title>
      <meta name="description" content={seo?.fields?.description || ""} />
      <meta property="og:title" content={seo?.fields?.title} key="title" />
      <meta
        property="og:image"
        content={`https:${seo?.fields?.ogImage?.fields?.file?.url}`}
        key="ogImage"
      />
      {noindex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}
    </Head>
  );
};

export default ContentfulPageSeo;
