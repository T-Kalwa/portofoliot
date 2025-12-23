"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={cn("flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-full p-1", className)}>
            <button
                onClick={() => setLanguage("en")}
                className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                    language === "en"
                        ? "bg-white dark:bg-zinc-600 shadow-sm text-black dark:text-white"
                        : "text-zinc-500 hover:text-black dark:hover:text-white"
                )}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("fr")}
                className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all",
                    language === "fr"
                        ? "bg-white dark:bg-zinc-600 shadow-sm text-black dark:text-white"
                        : "text-zinc-500 hover:text-black dark:hover:text-white"
                )}
            >
                FR
            </button>
        </div>
    );
}
