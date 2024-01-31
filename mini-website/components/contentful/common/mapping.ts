import dynamic from "next/dynamic";


export const componentMap: any = {
  heroBanner: dynamic(() =>
    import("@/components/contentful/hero-banner-wrapper").then(
      (module) => module
    )
  ),
  duplexSection: dynamic(() =>
    import("@/components/contentful/duplex-section-wrapper.tsx").then(
      (module) => module
    )
  ),

};
