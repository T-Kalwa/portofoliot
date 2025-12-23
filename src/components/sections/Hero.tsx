"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Terminal } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LaptopMockup, PhoneMockup } from "../ui/Mockups";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <SectionWrapper className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(29,78,216,0.1),transparent)] dark:bg-[radial-gradient(45%_40%_at_50%_60%,rgba(29,78,216,0.15),transparent)]" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 mb-8 max-w-fit"
                    >
                        {t.hero.badge}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl max-w-2xl"
                    >
                        {t.hero.titleStart} <span className="text-blue-600 dark:text-blue-500">{t.hero.titleBackend}</span> {t.hero.titleMid} <span className="text-pink-600 dark:text-pink-500">{t.hero.titleFrontend}</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10 flex items-center gap-x-6"
                    >
                        <Link
                            href="#projects"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all flex items-center gap-2"
                        >
                            {t.hero.ctaWork} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="#contact" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                            {t.hero.ctaContact} <span aria-hidden="true">→</span>
                        </Link>
                    </motion.div>

                    {/* Floating Icons Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-16 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Database className="h-8 w-8 text-blue-500" />
                            <span className="text-xs font-mono">{t.hero.backend}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Code2 className="h-8 w-8 text-pink-500" />
                            <span className="text-xs font-mono">{t.hero.frontend}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Terminal className="h-8 w-8 text-green-500" />
                            <span className="text-xs font-mono">{t.hero.devops}</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mt-12 lg:mt-0"
                >
                    {/* Laptop */}
                    <div className="relative z-10">
                        <LaptopMockup />
                    </div>
                    {/* Phone overlapping - positioned absolutely related to container */}
                    <div className="absolute -bottom-8 -right-4 lg:-right-8 z-20 scale-75 lg:scale-90 origin-bottom-right">
                        <PhoneMockup />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
