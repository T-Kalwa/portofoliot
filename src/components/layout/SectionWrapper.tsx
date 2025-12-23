import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-20 lg:py-32 overflow-hidden", className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                {children}
            </div>
        </section>
    );
}
