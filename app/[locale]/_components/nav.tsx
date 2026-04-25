"use client";

import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Nav({ locale }: { locale: string }) {
  const t = useTranslations("common");

  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-12 h-16">
        <div className="flex items-center gap-8">
          <a
            href={`/${locale}`}
            className="text-base font-semibold tracking-tight text-zinc-900"
          >
            {t("siteName")}
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-500">
            <a
              href="#features"
              className="transition-colors hover:text-zinc-900"
            >
              {t("nav.features")}
            </a>
            <a href="#workflow" className="transition-colors hover:text-zinc-900">
              {t("nav.showcase")}
            </a>
            <a href="#git-flow" className="transition-colors hover:text-zinc-900">
              {t("nav.gitFlow")}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="https://app.movabase.com"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-zinc-700 active:scale-[0.98]"
          >
            {t("nav.getStarted")}
            <ArrowUpRight size={12} weight="bold" />
          </a>
        </div>
      </div>
    </nav>
  );
}
