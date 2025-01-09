import { ComponentDefinition } from "@contentful/experiences-sdk-react";

export const testComponentDefinition: ComponentDefinition = {
  id: "test-component",
  name: "Test Component",
  category: "Blocks",

  builtInStyles: ["cfMargin", "cfPadding"],

  variables: {
    // there are two types of variables, content variables and design variables
    title: {
      displayName: "Title",
      type: "Text", //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: "Welcome",
      group: "content",
    },
  },
};
