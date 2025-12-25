"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    const { scrollY } = useScroll();

    // Direct Scroll Mapping (Removes jitter)
    const yText = useTransform(scrollY, [0, 500], [0, 100]);
    const yImage = useTransform(scrollY, [0, 500], [0, 250]);
    const scaleImage = useTransform(scrollY, [0, 500], [1.15, 1.25]); // Subtle zoom in
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]); // Fade out on scroll

    const mobileLinks = [
        { name: "Mail", href: "mailto:contact@kangquintus.com" },
        { name: "Instagram", href: "https://www.instagram.com/kangquintus/?hl=en" },
        { name: "IMDb", href: "https://www.imdb.com/name/nm6886375/" },
    ];

    return (
        <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col md:flex-row items-center justify-between bg-black overflow-hidden px-6 pt-24 pb-8 md:px-12 md:pt-0">

            {/* Massive Typography - Overlapping on Mobile */}
            <div className="z-20 w-full md:w-1/2 flex flex-col justify-center items-start pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-30"
                >
                    <motion.div style={{ y: yText, opacity: opacityHero, willChange: "transform" }}>
                        <h1 className="text-[17vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter text-white lowercase mix-blend-exclusion -ml-[0.05em]">
                            kang <br />
                            quintus
                        </h1>
                    </motion.div>
                </motion.div>

                {/* Subtitle / Bio (Desktop Only) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                    className="mt-8 max-w-sm hidden md:block"
                >
                    <motion.div style={{ y: yText, opacity: opacityHero }}>
                        <p className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
                            Award-winning Actor & Producer redefining African Cinema.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Mobile Specific Links & Bio Snippet */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-24 w-full md:hidden flex flex-col gap-12"
                >
                    {/* Horizontal Mini Links */}
                    <div className="flex gap-8 border-b border-white/20 pb-4">
                        {mobileLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-1"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Bio Snippet */}
                    <div className="space-y-6">
                        <p className="text-white/70 text-lg leading-snug font-medium">
                            Quintus was recently recognized for his groundbreaking work in <span className="text-white border-b border-white/50 pb-1 italic">"The Fisherman's Diary"</span>, becoming a pivotal figure in the new wave of African storytelling.
                        </p>

                        <div className="flex items-center gap-4 group">
                            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white">About Quintus</span>
                            <div className="h-px w-8 bg-white/30 group-hover:w-16 transition-all duration-500"></div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* High Contrast Portrait - Centered on Mobile, Right on Desktop */}
            <motion.div
                className="absolute md:relative top-0 left-0 w-full md:w-[50vw] h-screen md:h-screen grayscale contrast-125 z-10 md:z-0"
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
                        className="object-cover object-top md:object-center opacity-80 md:opacity-100"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Advanced Seamless Blending */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black md:from-transparent md:to-black z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent h-1/4 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10 md:hidden" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,black_100%)] opacity-80 md:opacity-60 z-20" />
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
