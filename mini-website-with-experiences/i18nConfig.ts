import { client } from "@/lib/contentful/client";
import { Config } from "next-i18n-router/dist/types";


const locales = [ 'de', 'ja', "en-US"]

const getLocales = () => {

  return locales
}

const i18nConfig: Config = {
  locales: getLocales(),
  defaultLocale: "en-US",
};

export default i18nConfig;
