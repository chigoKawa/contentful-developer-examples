import type { ComponentDefinition } from "@contentful/experiences-sdk-react";

const studioCardDefinition: ComponentDefinition = {
  id: "card",
  name: "Card",
  category: "Blocks",
  children: true,
  builtInStyles: ["cfImageAsset", "cfImageOptions"],
  variables: {
    title: {
      type: "Text",
      displayName: "Title",
      defaultValue: "Card Title",
    },

    cfImageAsset: {
      displayName: "Image",
      type: "Media",
      description: "Image to display",
      // defaultValue: {
      //   url: "https://nextui.org/images/hero-card-complete.jpeg",
      // },
    },
    cfImageOptions: {
      displayName: "Image options",
      type: "Object",
      group: "style",
      defaultValue: {
        width: "500px",
        height: "100%",
        objectFit: "none",
        objectPosition: "center center",
        quality: "100",
        targetSize: "500px",
        // backgroundImage: {
        //   url: "https://nextui.org/images/hero-card-complete.jpeg",
        // },
        // url: "https://nextui.org/images/hero-card-complete.jpeg",
      },
    },
  },
};

export default studioCardDefinition;
