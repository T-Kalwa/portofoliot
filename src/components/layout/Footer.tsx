export function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 bg-zinc-50 dark:bg-zinc-950">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Portfolio. Built with Next.js, Tailwind & Love.
                </p>
            </div>
        </footer>
    );
}
