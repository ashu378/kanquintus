"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CareerSnapshot() {
    return (
        <section className="py-24 md:py-32 bg-black text-white px-6 md:px-12 overflow-hidden">

            {/* Massive Statement - Ali Ali Style "90 Million" example */}
            <div className="flex flex-col items-center justify-center text-center mb-32 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase"
                >
                    Netflix
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm md:text-base uppercase tracking-[0.3em] font-medium mt-6 md:-mt-4 bg-black px-4 z-10"
                >
                    First Cameroon Acquisition
                </motion.p>
            </div>

            {/* Split Component 1 - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 md:order-1"
                >
                    <span className="block w-12 h-0.5 bg-white mb-6" />
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                        "One of the top directors redefining African Cinema."
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md">
                        As the producer and lead actor of <em>The Fisherman’s Diary</em>, Kang secured a historic milestone for Cameroon. His work bridges the gap between African realism and high-end cinematic production.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="order-1 md:order-2 aspect-[4/3] bg-white/5 relative overflow-hidden group"
                >
                    <Image
                        src="/images/fishermans-diary.png"
                        alt="The Fisherman's Diary"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <p className="absolute -bottom-8 left-0 text-[10px] uppercase tracking-widest text-white/40">
                        Academy Awards Entry • 2021
                    </p>
                </motion.div>
            </div>

            {/* Split Component 2 - Image Left, Text Right (ZigZag) */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] bg-white/5 relative overflow-hidden group"
                >
                    <Image
                        src="/images/mabanda.png"
                        alt="Mabanda"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <p className="absolute -bottom-8 left-0 text-[10px] uppercase tracking-widest text-white/40">
                        Mabanda • Production Still
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="block w-12 h-0.5 bg-white mb-6" />
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                        Upcoming: Mabanda (2026)
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md">
                        With his upcoming magnum opus <em>Mabanda</em>, Kang continues to elevate the standard of storytelling. A visually stunning epic that promises to be his most ambitious project yet.
                    </p>
                </motion.div>

            </div>

        </section>
    );
}
