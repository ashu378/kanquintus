"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const works = [
    {
        title: "Mabanda",
        year: "2026",
        role: "Lead Actor, Producer",
        image: "/images/work/mabanda-poster.jpg",
        slug: "mabanda"
    },
    {
        title: "The Fisherman's Diary",
        year: "2020",
        role: "Lead Actor, Producer",
        image: "/images/work/fishermans-diary-netflix-v2.jpg",
        slug: "fishermans-diary"
    },
    {
        title: "Nganu",
        year: "2023",
        role: "Lead Actor, Producer",
        image: "/images/work/nganu-title-v2.png",
        slug: "nganu"
    }
];

export function FeaturedWorks() {
    return (
        <section className="py-24 bg-black text-white px-6 md:px-12">
            <div className="flex flex-col gap-24">
                {/* Section Header */}
                <div className="flex justify-between items-end border-b border-white/20 pb-4">
                    <span className="text-xs uppercase tracking-widest text-white/50">Selected Works</span>
                    <Link href="/films" className="text-xs uppercase tracking-widest hover:text-white/50 transition-colors">View All</Link>
                </div>

                {/* Editorial List */}
                <div className="flex flex-col gap-20">
                    {works.map((work, i) => (
                        <Link href={`/films/${work.slug}`} key={work.slug} className="group cursor-none sm:cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col md:flex-row gap-8 md:items-center"
                            >
                                {/* Title - Massive */}
                                <div className="flex-1 order-2 md:order-1">
                                    <h2 className="text-6xl md:text-8xl font-serif font-bold group-hover:text-white/70 transition-colors duration-500">
                                        {work.title}
                                    </h2>
                                    <div className="flex gap-4 mt-2 text-sm text-white/50 uppercase tracking-widest">
                                        <span>{work.year}</span>
                                        <span>—</span>
                                        <span>{work.role}</span>
                                    </div>
                                </div>

                                {/* Image Preview (Reveals with curtain) */}
                                <div className="w-full md:w-1/3 aspect-[16/9] relative overflow-hidden order-1 md:order-2">
                                    {/* Curtain Mask */}
                                    <motion.div
                                        initial={{ x: "0%" }}
                                        whileInView={{ x: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-white z-20"
                                    />

                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
