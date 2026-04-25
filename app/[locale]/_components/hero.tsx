"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-16 lg:gap-24 items-center"
        >
          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700 tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-zinc-900"
            >
              {t("title.0")}
              <br />
              <span className="text-zinc-400">{t("title.1")}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-[55ch]"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://app.movabase.com"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-700 active:scale-[0.98] dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {t("cta")}
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-600 transition-all duration-200 hover:border-zinc-300 hover:text-zinc-900 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {t("ctaSecondary")}
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-full">
              <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-300" />
                  <div className="h-3 w-3 rounded-full bg-yellow-300" />
                  <div className="h-3 w-3 rounded-full bg-green-300" />
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-zinc-400">{"// locales/en/common.json"}</div>
                  <div className="text-zinc-800">
                    <span className="text-emerald-600">{"{\""}</span>
                    <span className="text-zinc-900">{"nav"}</span>
                    <span className="text-emerald-600">{"\": "}</span>
                    <span className="text-amber-600">{"{"}</span>
                  </div>
                  <div className="pl-4 text-zinc-800">
                    <span className="text-emerald-600">{"\""}</span>
                    <span className="text-zinc-900">{"home"}</span>
                    <span className="text-emerald-600">{"\": "}</span>
                    <span className="text-amber-600">{"\"Home\""}</span>
                  </div>
                  <div className="pl-4 text-zinc-800">
                    <span className="text-emerald-600">{"\""}</span>
                    <span className="text-zinc-900">{"features"}</span>
                    <span className="text-emerald-600">{"\": "}</span>
                    <span className="text-amber-600">{"\"Features\""}</span>
                  </div>
                  <div className="text-zinc-800">
                    <span className="text-amber-600">{"}"}</span>
                    <span className="text-emerald-600">{"}"}</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-zinc-200/60 bg-white px-4 py-2.5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Git sync: 142 keys
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 pt-12 border-t border-zinc-100"
        >
          {(["formats", "keys", "sync"] as const).map((key) => (
            <motion.div key={key} variants={fadeUp} className="flex flex-col gap-1">
              <span className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                {t(`stats.${key}.value`)}
              </span>
              <span className="text-sm text-zinc-400">{t(`stats.${key}.label`)}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
