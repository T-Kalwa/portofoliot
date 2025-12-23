"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";


export function About() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="about" className="bg-zinc-50 dark:bg-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-6">
                        {t.about.title}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                        {t.about.p1Part1} <span className="font-semibold text-blue-600 dark:text-blue-400">{t.about.p1Role}</span> {t.about.p1Part2}
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                        {t.about.p2Part1} <span className="font-mono text-sm bg-zinc-200 dark:bg-zinc-800 px-1 rounded">ASP.NET MVC</span> {t.about.p2Part2} <span className="font-mono text-sm bg-zinc-200 dark:bg-zinc-800 px-1 rounded">Node.js</span>{t.about.p2Part3}
                    </p>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        {t.about.p3}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-square rounded-2xl bg-zinc-200 dark:bg-zinc-800 overflow-hidden shadow-xl"
                >
                    <Image
                        src="/images/moi.jpg"
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
