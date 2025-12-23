"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navigation = [
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl tracking-tighter">
                        Kalwa.dev
                    </Link>
                </div>
                <div className="flex lg:hidden items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    <LanguageSwitcher className="mr-4" />
                    {/* Placeholder for real links */}
                    <Link href="https://github.com" target="_blank">
                        <Github className="h-5 w-5 hover:text-blue-500 transition-colors" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-zinc-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 font-bold text-xl">
                            &lt;Dev /&gt;
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
