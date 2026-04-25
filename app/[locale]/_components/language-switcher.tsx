"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react";

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} weight="light" className="text-zinc-400" />
      {routing.locales.map((l) => (
        <Link
          key={l}
          href="/"
          locale={l}
          className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
            l === locale
              ? "bg-zinc-900 text-white shadow-sm dark:bg-white dark:text-zinc-900"
              : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
