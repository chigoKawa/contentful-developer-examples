"use client";

import {
  CONTENTFUL_COMPONENTS,
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
// components
import { StudioButton } from "@/components/experiences/components/studio-button/studio-button";
import { studioButtonDefinition } from "@/components/experiences/components/studio-button/studio-button.definition";
import { StudioImage } from "@/components/experiences/components/studio-image/studio-image";
import { studioImageDefinition } from "@/components/experiences/components/studio-image/studio-image.definition";
import { StudioLink } from "@/components/experiences/components/studio-link/studio-link";
import { studioLinkDefinition } from "@/components/experiences/components/studio-link/studio-link.definition";

import { StudioHero } from "@/components/experiences/components/studio-hero/studio-hero";
import { studioHeroDefinition } from "@/components/experiences/components/studio-hero/studio-hero.definition";

import StudioCard from "../components/studio-card/studio-card";

import studioCardDefinition from "../components/studio-card/studio-card.definition";

import { StudioAnnouncement } from "../components/studio-announcement/studio-announcement";
import { studioAnnouncementDefinition } from "../components/studio-announcement/studio-announcement.definition";

// Define components
const components = [
  { component: StudioButton, definition: studioButtonDefinition },
  { component: StudioImage, definition: studioImageDefinition },
  { component: StudioLink, definition: studioLinkDefinition },
  { component: StudioHero, definition: studioHeroDefinition },
  { component: StudioCard, definition: studioCardDefinition },
  { component: StudioAnnouncement, definition: studioAnnouncementDefinition },
];

// Register components
defineComponents(
  components,
  {
    enabledBuiltInComponents: [
      // CONTENTFUL_COMPONENTS.button.id,
      // CONTENTFUL_COMPONENTS.heading.id,
      CONTENTFUL_COMPONENTS.richText.id,
      CONTENTFUL_COMPONENTS.text.id,
      CONTENTFUL_COMPONENTS.image.id,
    ],
  } // Defined built-in components
);

// register design tokens
defineDesignTokens({
  spacing: { XS: "4px", S: "16px", M: "32px", L: "64px", XL: "128px" },
  sizing: { XS: "16px", S: "100px", M: "300px", L: "600px", XL: "1024px" },
  color: {
    JPL_Red: "#E31937",
    JPL_Red_Light: "#E73B54",
    JPL_Red_Dark: "#C1152E",
    JPL_Red_Darker: "#5C0411",
    JPL_Aqua: "#489FDF",
    Blue: "#8BCBFA",
    Dark_Blue: "#004562",
    Green: "#14C97A",
    Alert_Gold: "#FFBA32",
    Alert_Gold_Light: "#FFF9EB",
    Disabled_Gray: "#D8D8D8",
  },
  border: {
    Azure: { width: "1px", style: "solid", color: "azure" },
    Hero: { width: "2px", style: "dashed", color: "#ffaabb" },
    Card: { width: "1px", style: "solid", color: "#ffccbb" },
    Carousel: {
      width: "2px",
      style: "dotted",
      color: "rgba(30, 25, 25, 0.75)",
    },
  },
  fontSize: { XS: "12px", SM: "14px", MD: "16px", LG: "24px", XL: "32px" },
  lineHeight: { XS: "1", SM: "1.25", MD: "1.5", LG: "200%" },
  letterSpacing: {
    None: "0",
    XS: "0.05em",
    SM: "0.1em",
    MD: "0.15em",
    LG: "0.2em",
  },
  textColor: {
    White: "#FFFFFF",
    Off_White: "#FAFAFA",
    Gray_Light: "#F5F5F5",
    Gray_Light_Mid: "#D8D8D8",
    Gray_Mid: "#949494",
    Gray_Mid_Dark: "#6F6F6F",
    Gray_Dark: "#222222",
    Black: "#000000",
    Dark: "#1a1a1a",
    Light: "#efefef",
    Slate: "#94a3b8",
  },
});

const ExperienceComponentRegistration = () => {
  return <div />;
};

export default ExperienceComponentRegistration;
