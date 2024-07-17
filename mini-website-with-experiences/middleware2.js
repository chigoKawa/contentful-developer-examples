import { NextResponse } from "next/server";
import { client } from "@/lib/contentful/client";

let locales = ["en-US", "nl-NL", "nl"];

// Get the preferred locale, similar to the above or using a library
async function getLocale(request) {}

let getLocalesFromContentful = async () => {
  try {
    const space = await client(false).getSpace();
    const locales = space.locales?.map((locale) => locale.code) || [];
    return locales;
  } catch (error) {
    console.error("Error fetching locales:", error);
    return [];
  }
};

export async function middleware(request) {
  const locales = await getLocalesFromContentful();
  console.log(locales);
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
