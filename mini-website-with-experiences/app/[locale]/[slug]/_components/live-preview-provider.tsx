"use client"
import React from "react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';

const LivePreviewProvider = ({ children }: { children: React.ReactNode }) => {
    const locale = useCurrentLocale(i18nConfig) || "en-US";
  return (
    <div>
      <ContentfulLivePreviewProvider locale={locale}>
        {children}
      </ContentfulLivePreviewProvider>
    </div>
  );
};

export default LivePreviewProvider;
