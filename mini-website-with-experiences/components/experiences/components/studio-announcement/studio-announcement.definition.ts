import { ComponentDefinition } from "@contentful/experiences-sdk-react";

// https://www.contentful.com/developers/docs/experiences/component-definition-schema/

export const studioAnnouncementDefinition: ComponentDefinition = {
  id: "announcement",
  name: "Announcement",
  category: "Blocks",
  builtInStyles: [],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: "Add a button to the canvas",
  },
  variables: {
    // there are two types of variables, content variables and design variables
    message: {
      displayName: "Message",
      type: "Text", //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: "Your message goes here",
      group: "content",
    },
    variant: {
      displayName: "Variant",
      type: "Text",
      defaultValue: "default",
      group: "style", // Possible values: style, content
      validations: {
        in: [
          { value: "default", displayName: "Default" },
          { value: "danger", displayName: "Danger" },
          { value: "success", displayName: "Success" },
        ],
      },
    },

    random: {
      displayName: "Random Array Example",
      type: "Array",
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["duplexSection", "heroBanner", "demoHero"],
          },
        ],
        linkType: "Entry",
      },
    },
  },
};

/**
 * 
 * Content variables
Content variables are variables that provide data for your components. Such data is part of your Data Domain and you are probably already storing it in Entries or Assets.

Values for such variables can be provided as one-offs, typing them manually, or could be instead taken by reference from existing Entries or Assets. We call such operation - Binding.

To make a variable a Content variable, set group to content in its variable definition.

Such variables are rendered in a specific tab - Content tab.

 

Design variables
Design variables are variables that allow to change visual representation of a component. We believe, that such values are not part of the Data Domain and hence should not be stored in Entries or Assets and can be set by the user for each component on the go.

To make a variable a Design variable, set group to style in its variable definition

Such variables are rendered in a specific tab - Design tab.
 */
