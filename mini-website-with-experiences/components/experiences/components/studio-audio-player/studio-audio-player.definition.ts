import type { ComponentDefinition } from "@contentful/experiences-sdk-react";
// https://www.contentful.com/developers/docs/experiences/component-definition-schema/

const thumbnailUrl =
  "https://images.ctfassets.net/drya7kvck7n6/7wrYr53XFL9jeOOwLvh0Sq/49d80dc701b46848be1a57157a460436/image.png";

export const studioAudioPlayerDefinition: ComponentDefinition = {
  id: "audio-player",
  name: "Audio Player",
  category: "Blocks",
  // builtInStyles: ["cfBackgroundColor", "cfMargin", "cfPadding"],

  variables: {
    // there are two types of variables, content variables and design variables
    title: {
      displayName: "Title",
      type: "Text", //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: "Audio Title",
      group: "content",
    },
    subline: {
      displayName: "Subline",
      type: "Text", //  'Text' | 'RichText' | 'Number' | 'Date' | 'Boolean' | 'Location' | 'Media' | 'Object' | 'Hyperlink' | 'Link' | 'Array';
      defaultValue: "Subline",
      group: "content",
    },
    imageUrl: {
      displayName: "Image URL",
      type: "Media",
      defaultValue: "https://picsum.photos/800",
    },
    audioUrl: {
      displayName: "Audio File",
      type: "Media",
      // linkType: "Asset",
      // defaultValue: "https://picsum.photos/800",
      linkMimetypeGroup: ["audio"],
      // items: {
      //   validations: [
      //     {
      //       linkMimetypeGroup: ["audio"],
      //     },
      //   ],
      // },
      // validations: {
      //   linkMimetypeGroup: ["audio"],
      // },
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
    sideEffect: {
      displayName: "Side Effect",
      type: "Text",
      defaultValue: "alertMe",
      group: "style",
      validations: {
        in: [
          { value: "alertMe", displayName: "Open Alert" },
          { value: "consoleLog", displayName: "Log to console" },
        ],
      },
    },

    // bind to an entry reference
    entryReference: {
      displayName: "Entry Reference",
      type: "Link",
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
