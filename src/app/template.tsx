"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Ali Ali-inspired Page Transition Template
 * Handles directional slides and high-end wipe effects.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {/* Grain Texture Overlay for Light Pages */}
            {(pathname?.startsWith("/films") || pathname?.startsWith("/contact") || pathname?.startsWith("/mabanda")) && (
                <>
                    <style jsx global>{`
                        @keyframes film-noise {
                            0% { transform: translate3d(0, 0, 0); }
                            10% { transform: translate3d(-5%, -5%, 0); }
                            20% { transform: translate3d(-10%, 5%, 0); }
                            30% { transform: translate3d(5%, -10%, 0); }
                            40% { transform: translate3d(-5%, 15%, 0); }
                            50% { transform: translate3d(-10%, 5%, 0); }
                            60% { transform: translate3d(15%, 0, 0); }
                            70% { transform: translate3d(0, 10%, 0); }
                            80% { transform: translate3d(-15%, 0, 0); }
                            90% { transform: translate3d(10%, 5%, 0); }
                            100% { transform: translate3d(5%, 0, 0); }
                        }
                    `}</style>
                    <div
                        className="fixed -inset-[100%] z-[100] pointer-events-none opacity-[0.05] contrast-150 brightness-120"
                        style={{
                            backgroundImage: `url('https://alitwotimes.com/wp-content/themes/aliali/public/images/noise.png')`,
                            backgroundRepeat: 'repeat',
                            animation: 'film-noise 0.2s steps(4) infinite',
                        }}
                    />
                </>
            )}

            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                variants={{
                    initial: {
                        opacity: 0,
                        y: 20,
                        filter: "blur(5px)"
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1], // Ease-out expo
                        }
                    }
                }}
                className="w-full relative origin-top"
            >
                <div className="relative z-10">
                    {children}
                </div>
            </motion.div>
        </>
    );
}
