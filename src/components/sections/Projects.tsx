"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="projects" className="relative">
            {/* Background Grid Pattern just for this section if we want, or global. Using global class on section */}
            <div className="absolute inset-0 bg-grid opacity-25 mask-image-b-0 pointer-events-none" />

            <div className="relative z-10 text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {t.projects.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {t.projects.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(
                            "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-xl transition-all hover:border-blue-500/50",
                            project.featured ? "md:col-span-2" : "md:col-span-1"
                        )}
                    >
                        {/* Content */}
                        <div className="p-8 flex flex-col h-full bg-gradient-to-b from-transparent to-zinc-50/50 dark:to-zinc-900/50">

                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    {project.links.github && (
                                        <Link href={project.links.github} target="_blank" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                                            <Github className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {project.links.demo && (
                                        <Link href={project.links.demo} target="_blank" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
                                            <ExternalLink className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 text-base mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="font-mono text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Gradient / Glow on hover */}
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
