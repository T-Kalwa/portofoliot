"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        title: "Restaurant QR Command System",
        description: "A full-stack ordering system allowing customers to scan QR codes and order directly. Features real-time kitchen updates and a comprehensive admin dashboard.",
        tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
        links: { github: "https://github.com", demo: null },
        image: null // Add placeholder logic
    },
    {
        title: "Nabib Beauty",
        description: "Modern appointment booking platform for a beauty salon. Includes service management, admin panel, and responsive design.",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
        links: { github: "https://github.com", demo: "https://nabib-beauty.vercel.app" }, // Placeholder
        image: null
    },
    {
        title: "Auth Microservice",
        description: "A centralized authentication service handling JWT issuance, refresh tokens, and user role management used across multiple applications.",
        tags: ["FastAPI", "Python", "Redis", "Docker"],
        links: { github: "https://github.com", demo: null },
        image: null
    }
];

export function Projects() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="projects" className="bg-zinc-50 dark:bg-zinc-900/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {t.projects.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {t.projects.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group"
                    >
                        {/* Image Placeholder */}
                        <div className="h-48 bg-zinc-200 dark:bg-zinc-800 w-full relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-medium">
                                {project.title} Preview
                            </div>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                {project.links.github && (
                                    <Link href={project.links.github} target="_blank" className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                )}
                                {project.links.demo && (
                                    <Link href={project.links.demo} target="_blank" className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform">
                                        <ExternalLink className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{project.title}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-1">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
