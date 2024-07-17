import { ComponentDefinition } from "@contentful/experiences-sdk-react";

const thumbnailUrl = "https://images.ctfassets.net/drya7kvck7n6/7B98gWYZtiUibD2z5OIR09/ddfa3996acb04a5b179bc4e742c16019/image.png"

export const studioLinkDefinition: ComponentDefinition = {
  id: "baseLink",
  name: "Link",
  category: "Base",
  thumbnailUrl: thumbnailUrl,
  // builtInStyles: ["cfBackgroundColor"],
  variables: {
    label: {
      displayName: "Label",
      type: "Text",
      defaultValue: "Click Here",
    },
    href: {
      displayName: "Link Url",
      type: "Text",
      defaultValue: "/",
    },
    variant: {
      displayName: "Variant",
      type: "Text",
      defaultValue: "primary",
      group: "style",
      validations: {
        in: [
          { value: "primary", displayName: "Primary" },
          { value: "secondary", displayName: "Secondary" },
          { value: "default", displayName: "Default" },
          { value: "unstyled", displayName: "Unstyled" },
        ],
      },
    },
   
  },
};
