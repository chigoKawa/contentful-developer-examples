import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import ExperienceComponentRegistration from "@/components/experiences/layout/experience-component-registration";
import "../app/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available

  return (
    <>
      <ExperienceComponentRegistration />
      <Component {...pageProps} />
    </>
  );
  // const getLayout = Component.getLayout ?? ((page) => page);


}
