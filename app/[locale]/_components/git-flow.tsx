"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  GitBranch,
  ArrowDown,
  PencilSimple,
  GitPullRequest,
} from "@phosphor-icons/react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

const stepIcons: Record<string, React.ReactNode> = {
  connect: <GitBranch size={24} weight="light" />,
  pull: <ArrowDown size={24} weight="light" />,
  edit: <PencilSimple size={24} weight="light" />,
  pr: <GitPullRequest size={24} weight="light" />,
};

const stepKeys = ["connect", "pull", "edit", "pr"] as const;

const stepNumbers: Record<string, string> = {
  connect: "01",
  pull: "02",
  edit: "03",
  pr: "04",
};

export function GitFlow() {
  const t = useTranslations("comparison");

  return (
    <section className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl tracking-tighter leading-none text-zinc-900"
          >
            {t("gitFlow.sectionTitle")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-zinc-500 leading-relaxed max-w-[55ch]"
          >
            {t("gitFlow.sectionSubtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {stepKeys.map((key) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group relative flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-zinc-200/60 text-zinc-600 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:border-emerald-200 group-hover:text-emerald-600 group-hover:shadow-[0_8px_16px_-4px_rgba(16,185,129,0.1)]">
                  {stepIcons[key]}
                </div>
                <div className="w-px flex-1 bg-zinc-200 mt-4 last:hidden" />
              </div>
              <div className="flex flex-col gap-2 pb-8">
                <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-zinc-300">
                  Step {stepNumbers[key]}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {t(`gitFlow.steps.${key}.title`)}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[40ch]">
                  {t(`gitFlow.steps.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
