"use client";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import Link from "next/link";
import DemoHeroButton from "./demo-hero-button";

interface IDemoBannerProps {
  title: string;
  body: any;
  imagUrl: string;
  subTitle?: string;
  buttonTarget?: any;
  buttonLabel?: string;
  buttonVariant?: "Primary" | "Secondary" | "Dark";
  heroSize?: "Small" | "Medium" | "Large";
}

const DemoHero: React.FC<IDemoBannerProps> = ({
  title,
  body,
  imagUrl,
  subTitle,
  heroSize = "Medium",
  buttonTarget,
  buttonLabel,
  buttonVariant,
}) => {
  return (
    <div className="w-screen text-white  ">
      <section
        style={{ backgroundImage: `url(${imagUrl})` }}
        className={cx(heroSectionWrapper({ heroSize }), ` `)}
      >
        <div className="absolute inset-0 z-10 overflow-hidden bg-black opacity-20" />
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

        <div className="z-20 relative h-full  px-4 py-32 sm:px-6 lg:flex  lg:items-end lg:px-8 ">
          <div className="max-w-xl text-centerx ltr:sm:text-left rtl:sm:text-right">
            <p className="uppercase">{subTitle}</p>

            <h1 className="text-2xl  font-semibold sm:text-3xl">{title} </h1>

            {buttonLabel && buttonVariant && (
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <DemoHeroButton
                  href={"/"}
                  label={buttonLabel}
                  variant={buttonVariant}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
  return (
    <section
      style={{ backgroundImage: `url(${imagUrl})` }}
      className={`relative  bg-cover bg-center bg-no-repeat  mb-4`}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screenz lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right bg-black p-4 rounded-md bg-opacity-80">
          <h1 className="text-2xl font-extrabold sm:text-3xl">{title}</h1>

          <div className="mt-4 max-w-lg sm:text-xl/relaxed">{body}</div>

          {/* to be used for demonstrations */}
          {false && (
            <Link href="/">
              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <button className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                  Get Started
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const heroSectionWrapper = cva(
  "w-full relative bg-cover bg-centerx bg-no-repeat    ",
  {
    variants: {
      heroSize: {
        Small: "lg:h-[360px]",
        Medium: "h-[400px] lg:h-[600px]",
        Large: "xl:min-h-[684px] lg:min-h-[548px]",
      },
    },
    defaultVariants: {
      heroSize: "Medium",
    },
  }
);
export default DemoHero;
