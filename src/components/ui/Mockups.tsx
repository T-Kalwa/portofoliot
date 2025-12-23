import { cn } from "@/lib/utils";

interface DeviceMockupProps {
    className?: string;
}

export function LaptopMockup({ className }: DeviceMockupProps) {
    return (
        <div className={cn("relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]", className)}>
            <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-zinc-800">
                {/* Screen Content - Placeholder for Portfolio */}
                <div className="h-full w-full bg-zinc-100 dark:bg-zinc-900 flex flex-col">
                    <div className="h-6 bg-zinc-200 dark:bg-zinc-800 border-b border-zinc-300 dark:border-zinc-700 flex items-center gap-1 px-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-4 flex flex-col gap-2 animate-pulse">
                        <div className="h-4 w-1/3 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                        <div className="h-32 w-full bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                            <div className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto bg-zinc-900 dark:bg-zinc-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-zinc-800"></div>
            </div>
        </div>
    );
}

export function PhoneMockup({ className }: DeviceMockupProps) {
    return (
        <div className={cn("relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[400px] w-[200px] shadow-xl", className)}>
            <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[372px] bg-white dark:bg-zinc-800">
                {/* Screen Content - Placeholder for Mobile App */}
                <div className="h-full w-full bg-blue-500 flex flex-col items-center justify-center text-white relative">
                    <div className="absolute top-0 w-full h-8 bg-blue-600/50 flex justify-center pt-2">
                        <div className="w-20 h-4 bg-black rounded-full"></div>
                    </div>
                    <p className="font-bold text-lg">React Native</p>
                    <p className="text-xs opacity-80">Mobile App Demo</p>

                    {/* Simple UI representation */}
                    <div className="w-3/4 h-2 bg-white/30 rounded mt-8"></div>
                    <div className="w-3/4 h-2 bg-white/30 rounded mt-2"></div>
                    <div className="w-1/2 h-8 bg-white/90 rounded mt-4"></div>
                </div>
            </div>
        </div>
    );
}
