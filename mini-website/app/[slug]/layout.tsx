
import { ReactNode } from "react";

export default async function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="">{children}</div>;
}
