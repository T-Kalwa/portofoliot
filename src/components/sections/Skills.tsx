"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = {
    backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "SQLite", "Firebase/Auth"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "ASP.NET MVC Views"],
    devops: ["Git", "Linux (Bash)", "Azure Basic", "Raspberry Pi", "Postman", "Docker (Learning)"]
};

export function Skills() {
    const { t } = useLanguage();

    // Helper to map generic keys to translated titles
    const categoryTitles = {
        backend: t.skills.categories.backend,
        frontend: t.skills.categories.frontend,
        devops: t.skills.categories.devops,
    };

    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {t.skills.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {t.skills.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                            {categoryTitles[category as keyof typeof categoryTitles]}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 ring-1 ring-inset ring-zinc-500/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
