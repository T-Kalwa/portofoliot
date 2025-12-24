"use client";

import { SectionWrapper } from "../layout/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const skills = {
    topRow: ["Node.js", "Express", "FastAPI", "PostgreSQL", "React", "Next.js", "TypeScript", "Prisma"],
    bottomRow: ["Docker", "Git", "Linux", "Azure", "Tailwind CSS", "Socket.io", "Redis", "ASP.NET Core"]
};

export function Skills() {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="skills" className="overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                    {t.skills.title}
                </h2>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {t.skills.subtitle}
                </p>
            </div>

            <div className="flex flex-col gap-16 relative">
                {/* Gradient masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10" />

                {/* Row 1 */}
                <div className="flex overflow-hidden group">
                    <div className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-around px-4">
                        {[...skills.topRow, ...skills.topRow].map((skill, i) => (
                            <span
                                key={`${skill}-${i}`}
                                className="font-mono text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default whitespace-nowrap"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-around px-4" aria-hidden="true">
                        {[...skills.topRow, ...skills.topRow].map((skill, i) => (
                            <span
                                key={`${skill}-duplicate-${i}`}
                                className="font-mono text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default whitespace-nowrap"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2 (Reverse direction?) - CSS animation default is left. To go right, we need a separate keyframe or negative sorting. simpler is just another row going left but offset. 
                 Actually, simple 'animate-scroll' goes left. To go right, I'd need 'reverse' direction. 
                 Let's stick to left for now for simplicity, or add 'direction-reverse' style.
                 Let's keep both going left but different content for now to be safe, or just add animation-direction: reverse inline style.
                 */}
                <div className="flex overflow-hidden group" dir="rtl">
                    {/* rtl direction might flip text, better use animation-direction */}
                    <div className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-around px-4" style={{ animationDirection: 'reverse' }}>
                        {[...skills.bottomRow, ...skills.bottomRow].map((skill, i) => (
                            <span
                                key={`${skill}-${i}`}
                                className="font-mono text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default whitespace-nowrap"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-8 animate-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center justify-around px-4" style={{ animationDirection: 'reverse' }} aria-hidden="true">
                        {[...skills.bottomRow, ...skills.bottomRow].map((skill, i) => (
                            <span
                                key={`${skill}-duplicate-${i}`}
                                className="font-mono text-4xl font-bold text-zinc-300 dark:text-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default whitespace-nowrap"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
