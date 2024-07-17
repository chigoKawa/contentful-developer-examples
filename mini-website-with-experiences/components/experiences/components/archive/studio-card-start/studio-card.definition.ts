import type { ComponentDefinition } from "@contentful/experiences-sdk-react";
// https://www.contentful.com/developers/docs/experiences/component-definition-schema/#variable-types-in-experiences

const studioCardDefinition: ComponentDefinition = {
  builtInStyles: ["cfImageAsset", "cfImageOptions"],
  variables: {
    // cfImageAsset: {
    //   displayName: "Image",
    //   type: "Media",
    //   description: "Image to display",
    // },
    // cfImageOptions: {
    //   displayName: "Image options",
    //   type: "Object",
    //   group: "style",
    //   defaultValue: {
    //     width: "500px",
    //     height: "100%",
    //     objectFit: "none",
    //     objectPosition: "center center",
    //     quality: "100",
    //     targetSize: "500px",
    //   },
    // },
  },
};

export default studioCardDefinition;
