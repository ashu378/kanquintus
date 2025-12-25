"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    const { scrollY } = useScroll();

    // Direct Scroll Mapping (Removes jitter)
    // Text moves slightly down (lags scroll bit) - feels closer
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    // Image moves significantly down (lags scroll a lot) - feels further away/background
    const yImage = useTransform(scrollY, [0, 500], [0, 250]);
    const scaleImage = useTransform(scrollY, [0, 500], [1.15, 1.25]); // Subtle zoom in
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]); // Fade out on scroll

    return (
        <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between bg-black overflow-hidden px-6 pt-24 md:px-12 md:pt-0">

            {/* Massive Typography - Left/Center */}
            <div className="z-20 w-full md:w-1/2 flex flex-col justify-center items-start">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div style={{ y: yText, opacity: opacityHero, willChange: "transform" }}>
                        <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-exclusion">
                            Kang <br />
                            Quintus
                        </h1>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                    className="mt-8 max-w-sm"
                >
                    <motion.div style={{ y: yText, opacity: opacityHero }}>
                        <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
                            Award-winning Actor & Producer redefining African Cinema.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* High Contrast Portrait - Right */}
            <motion.div
                className="relative w-full md:w-[50vw] h-[50vh] md:h-screen mt-10 md:mt-0 grayscale contrast-125 z-0"
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    style={{ y: yImage, scale: scaleImage, opacity: opacityHero, willChange: "transform" }}
                    className="w-full h-full relative"
                >
                    <Image
                        src="/images/home/hero-portrait-final.png"
                        alt="Kang Quintus Portrait"
                        fill
                        className="object-cover object-top md:object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Advanced Seamless Blending */}
                    {/* 1. Left fade (to hide horizontal edge on mobile/blend into text on desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black md:from-transparent md:to-black z-10" />

                    {/* 2. Top fade (smooth transition from header) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent h-1/4 z-10" />

                    {/* 3. Bottom fade (melt into the next section) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                    {/* 4. Subtle Radial Mask to soften all edges simultaneously */}
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,transparent_0%,black_100%)] opacity-60 z-20" />
                </motion.div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-6 md:left-12 text-white/50 text-xs uppercase tracking-widest hidden md:block"
            >
                Scroll
                <motion.span
                    animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="block w-px h-8 bg-white/30 mt-2 mx-2 origin-top"
                ></motion.span>
            </motion.div>

        </section>
    );
}
