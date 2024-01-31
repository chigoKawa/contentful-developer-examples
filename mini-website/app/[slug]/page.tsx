import { fetchPages, fetchPageWithSlug } from "@/lib/contentful/pages";


import LandingPage from "./_components/landing-page";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const pages = await fetchPages();
  try {
    const slugs = pages?.items.map((page: any) => {
      return { slug: page?.fields?.slug };
    });

    return slugs;
  } catch (error) {
    return [{ slug: "" }];
  }
}

// export const revalidate = 3600;
export default async function Home({ params }: { params: { slug: string } }) {
  const entry :any = await fetchPageWithSlug({
    slug: params?.slug,
    preview: draftMode().isEnabled,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <LandingPage page={entry} />

   
      
    </main>
  );
}
