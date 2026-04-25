"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="border-t border-zinc-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-base font-semibold tracking-tight text-zinc-900">
              {t("siteName")}
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[35ch]">
              {t("footer.description")}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
              {t("footer.product")}
            </span>
            <a href="#features" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t("nav.features")}
            </a>
            <a href="https://app.movabase.com" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t("nav.getStarted")}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
              {t("footer.legal")}
            </span>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
              {t("footer.terms")}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
              {t("footer.support")}
            </span>
            <a
              href="https://status.movabase.com/status/all"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {t("footer.status")}
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-100 text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} {t("siteName")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
