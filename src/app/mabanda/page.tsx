"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MabandaPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">

            {/* Hero Section - Full Screen Title */}
            <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden px-6 md:px-12 pb-20">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/work/mabanda.jpg"
                        alt="Mabanda"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-bold uppercase tracking-widest text-red-500 mb-4"
                    >
                        A Kang Quintus Film — 2026
                    </motion.p>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[18vw] md:text-[15vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-exclusion -ml-[0.02em]"
                        >
                            Mabanda
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Synopsis Section */}
            <section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10">
                <div className="grid md:grid-cols-12 gap-12 md:gap-24">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="md:col-span-3"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Synopsis</h2>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-9 space-y-8"
                    >
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                            An epic tale of power, betrayal, and redemption set against the backdrop of a changing Africa.
                        </p>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
                            Following the massive success of "The Fisherman's Diary", Kang Quintus returns to the director's chair for his most ambitious project yet. Filmed across three countries with an international cast, Mabanda promises to redefine the scale of African cinema. The story follows a young warrior forced to choose between his heritage and the future of his people.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Details Grid */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                    {[
                        { label: "Genre", value: "Historical Epic" },
                        { label: "Release", value: "Summer 2026" },
                        { label: "Countries", value: "Cameroon, Nigeria, Kenya" },
                        { label: "Language", value: "English, French, Pidgin" },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-2"
                        >
                            <p className="text-xs font-bold uppercase tracking-widest text-white/40">{item.label}</p>
                            <p className="text-xl md:text-2xl font-bold tracking-tight">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Cast & Crew */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
                <div className="grid md:grid-cols-12 gap-12 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-3"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Cast & Crew</h2>
                    </motion.div>
                    <div className="md:col-span-9">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { name: "Kang Quintus", role: "Director / Producer", image: "/images/crew/crew1.jpg" },
                                { name: "Ade Okonkwo", role: "Lead Actor", image: "/images/crew/crew2.jpg" },
                                { name: "Amara Nduka", role: "Lead Actress", image: "/images/crew/crew3.jpg" },
                                { name: "Emeka Chidi", role: "Cinematographer", image: "/images/crew/crew4.jpg" },
                            ].map((member, i) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-4 group"
                                >
                                    <div className="aspect-[3/4] bg-neutral-900 rounded-sm relative overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{member.name}</p>
                                        <p className="text-sm text-red-500">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Get Notified */}
            <section className="py-32 md:py-48 px-6 md:px-12 border-t border-white/10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">Stay Updated</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                        Be the first to know.
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-lg font-bold text-red-500 hover:text-red-400 transition-colors group"
                    >
                        Get Notified
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </section>

        </div>
    );
}
