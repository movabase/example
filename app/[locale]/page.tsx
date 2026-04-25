import React from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "./_components/hero";
import { Features } from "./_components/features";
import { Workflow } from "./_components/workflow";
import { GitFlow } from "./_components/git-flow";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = React.use(params);
  setRequestLocale(locale);

  return (
    <div className="flex flex-col flex-1">
      <Nav locale={locale} />
      <Hero />
      <Features />
      <Workflow />
      <GitFlow />
      <Footer />
    </div>
  );
}
