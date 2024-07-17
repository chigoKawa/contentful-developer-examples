"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { StudioLink } from "../studio-link/studio-link";

export interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroSectionWrapper> {
  subtitle?: string;
  title: string;
  label: string;
  imageUrl: string;
  className?: string;
  href: string;
}

export const StudioHero: FC<IProps> = ({
  label,
  className,
  imageUrl,
  subtitle = "Subtitle",
  title = "Subtitle",
  variant = "medium",
  href = "/",
  ...ctflProps
}) => {
  return (
    <div className="w-screen text-white  ">
      <section
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={cx(heroSectionWrapper({ variant }), className, ` `)}
      >
        <div className="absolute inset-0 z-10 overflow-hidden bg-black opacity-20" />
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

        <div className="z-20 relative h-full  px-4 py-32 sm:px-6 lg:flex lg:h-screenx lg:items-end lg:px-8 ">
          <div className="max-w-xl text-centerx ltr:sm:text-left rtl:sm:text-right">
            <p className="uppercase">{subtitle}</p>

            <h1 className="text-2xl  font-semibold sm:text-3xl">{title} </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <StudioLink href={href} label="Read More" variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const linkVars = cva(
  "group  jpl-text-h1 text-base leading-tight tracking-wider flex items-center space-x-2 ",
  {
    variants: {
      variant: {
        primary: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        secondary: "uppercase hover:text-jpl-red-dark text-jpl-red-light",
        default: "underline hover:text-jpl-red-dark text-jpl-red-light",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
const heroSectionWrapper = cva(
  "w-full relative bg-cover bg-centerx bg-no-repeat    ",
  {
    variants: {
      variant: {
        small: "lg:h-[360px]",
        medium: "h-[400px] lg:h-[600px]",
        large: "xl:min-h-[684px] lg:min-h-[548px]",
      },
    },
    defaultVariants: {
      variant: "medium",
    },
  }
);

const linkCaretVars = cva("text-base group-hover:animate-pulse ", {
  variants: {
    variant: {
      primary: "",
      secondary: "hidden",
      default: "hidden",
      unstyled: "hidden",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
