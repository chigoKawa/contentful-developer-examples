import { ReactNode } from "react";
import LivePreviewProvider from "./_components/live-preview-provider";

export default async function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="">
      <LivePreviewProvider>{children}</LivePreviewProvider>
    </div>
  );
}
