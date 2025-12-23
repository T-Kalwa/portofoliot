"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { Mail, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="contact">
            <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {t.contact.title}
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-zinc-300">
                    {t.contact.description}
                </p>
                <div className="mt-10 flex justify-center gap-x-6">
                    <Link
                        href="mailto:contact@example.com"
                        className="flex items-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                    >
                        <Mail className="h-4 w-4" />
                        {t.contact.email}
                    </Link>
                    <Link href="https://github.com" target="_blank" className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-blue-400 transition-colors">
                        {t.contact.github} <Github className="h-4 w-4" />
                    </Link>
                    {/* Instagram added as requested */}
                    <Link href="https://instagram.com" target="_blank" className="text-sm font-semibold leading-6 text-white flex items-center gap-2 hover:text-pink-400 transition-colors">
                        {t.contact.instagram}
                    </Link>
                </div>

                {/* Decorative gradient */}
                <svg
                    viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true"
                >
                    <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient id="gradient">
                            <stop stopColor="#3b82f6" />
                            <stop offset={1} stopColor="#a855f7" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </SectionWrapper>
    );
}
