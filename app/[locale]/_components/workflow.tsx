"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Buildings,
  FolderOpen,
  Translate,
} from "@phosphor-icons/react";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

const workflowSteps = ["step1", "step2", "step3"] as const;

const workflowIcons = [
  <Buildings size={24} weight="light" key="buildings" />,
  <FolderOpen size={24} weight="light" key="folder" />,
  <Translate size={24} weight="light" key="translate" />,
];

export function Workflow() {
  const t = useTranslations("comparison");

  return (
    <section className="py-32">
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
            {t("workflow.sectionLabel")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl tracking-tighter leading-none text-zinc-900 max-w-[20ch]"
          >
            {t("workflow.sectionTitle")}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col"
        >
          {workflowSteps.map((key, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 py-10 border-t border-zinc-100 first:border-t-0"
            >
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono font-medium tracking-[0.2em] text-zinc-300">
                  0{i + 1}
                </span>
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-zinc-50 text-zinc-500 transition-colors duration-200 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  {workflowIcons[i]}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {t(`workflow.steps.${key}.title`)}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-[50ch]">
                  {t(`workflow.steps.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
