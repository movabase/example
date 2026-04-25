"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  FileJs,
  Users,
  GitMerge,
  MagnifyingGlass,
} from "@phosphor-icons/react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const featureIcons: Record<string, React.ReactNode> = {
  multiFormat: <FileJs size={28} weight="light" />,
  collaboration: <Users size={28} weight="light" />,
  gitSync: <GitMerge size={28} weight="light" />,
  search: <MagnifyingGlass size={28} weight="light" />,
};

const featureKeys = [
  "multiFormat",
  "collaboration",
  "gitSync",
  "search",
] as const;

export function Features() {
  const t = useTranslations("comparison");

  return (
    <section id="features" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600"
          >
            {t("sectionLabel")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl tracking-tighter leading-none text-zinc-900"
          >
            {t("sectionTitle")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-zinc-500 leading-relaxed max-w-[55ch]"
          >
            {t("sectionSubtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-100 rounded-2xl overflow-hidden"
        >
          {featureKeys.map((key, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className={`group relative bg-white p-8 md:p-10 transition-colors duration-300 ${
                i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:items-center" : ""
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-50 text-zinc-600 transition-colors duration-200 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  {featureIcons[key]}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[45ch]">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
