import { ComponentDefinition } from "@contentful/experiences-sdk-react";


const thumbnailUrl = "https://images.ctfassets.net/drya7kvck7n6/7B98gWYZtiUibD2z5OIR09/ddfa3996acb04a5b179bc4e742c16019/image.png"

export const studioHeroDefinition: ComponentDefinition = {
  id: "hero",
  name: "Hero banner",
  category: "Blocks",
  // thumbnailUrl: thumbnailUrl,
  // builtInStyles: ["cfBackgroundColor"],
  variables: {
    title: {
      displayName: "Title",
      type: "Text",
      defaultValue: "This is my title",
    },
    subtitle: {
      displayName: "Sub Title",
      type: "Text",
      defaultValue: "topline",
    },
    imageUrl: {
      displayName: "Image URL",
      type: "Text",
      defaultValue: "https://picsum.photos/800",
    },
    href: {
      displayName: "Link Url",
      type: "Text",
      defaultValue: "/",
    },
    variant: {
      displayName: "Variant",
      type: "Text",
      defaultValue: "medium",
      group: "style",
      validations: {
        in: [
          { value: "small", displayName: "Small" },
          { value: "medium", displayName: "Medium" },
          { value: "large", displayName: "Large" },
      
        ],
      },
    },
   
  },
};
