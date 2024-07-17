import { ComponentDefinition } from "@contentful/experiences-sdk-react";

// https://www.contentful.com/developers/docs/experiences/component-definition-schema/

const thumbnailUrl =
  "https://images.ctfassets.net/drya7kvck7n6/7wrYr53XFL9jeOOwLvh0Sq/49d80dc701b46848be1a57157a460436/image.png";

export const studioButtonDefinition: ComponentDefinition = {
  id: "button",
  name: "Button",
  category: "Base",
  thumbnailUrl: thumbnailUrl,
  builtInStyles: ["cfBackgroundColor"],
  tooltip: {
    // imageUrl: thumbnailUrl,
    description: "Add a button to the canvas",
  },
  variables: {
    // there are two types of variables, content variables and design variables
    label: {
      displayName: "Label",
      type: "Text",
      defaultValue: "Click Here",
      group: "content",
    },
    variant: {
      displayName: "Variant",
      type: "Text",
      defaultValue: "primary",
      group: "style", // Possible values: style, content
      validations: {
        in: [
          { value: "primary", displayName: "Primary" },
          { value: "secondary", displayName: "Secondary" },
          { value: "dark", displayName: "Dark" },
          { value: "accent", displayName: "Accent" },
          
        ],
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
