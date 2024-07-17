
import { ComponentDefinition } from "@contentful/experiences-sdk-react";


export  const studioImageDefinition: ComponentDefinition = {
  id: "customImage",
  name: "Image",
  category: "Blocks",
  // thumbnailUrl : "" ,
  variables: {
    imageUrl: {
      displayName: "Image Url",
      type: "Text",
      defaultValue: "https://picsum.photos/500",
    },
    width: {
      displayName: "Width",
      type: "Number",
      defaultValue: 500,
      group: "style",
    },
    height: {
      displayName: "Height",
      type: "Number",
      defaultValue: 500,
      group: "style",
    },
    altText: {
      type: "Text",
      displayName: "Alt Text",
      defaultValue: "value2",
      group: "style",
      validations: {
        in: [
          { value: "value1", displayName: "Parrots" },
          { value: "value2", displayName: "Alpaca" },
        ],
      },
    },
  },
};
