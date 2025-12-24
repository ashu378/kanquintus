"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="bg-black text-white pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-[1800px] mx-auto grid md:grid-cols-12 gap-12">

                {/* Left Column - Label */}
                <div className="md:col-span-2 pt-4 border-t border-white md:border-t-0 md:border-none">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs uppercase tracking-widest text-white/50 block mb-2"
                    >
                        Contact
                    </motion.span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="w-8 h-[1px] bg-white hidden md:block origin-left"
                    ></motion.div>
                </div>

                {/* Right Content Area */}
                <div className="md:col-span-10 flex flex-col gap-24">

                    {/* Hero Title - Single Line, Title Case */}
                    <div className="border-b-2 border-white pb-2 overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[13vw] leading-[0.85] font-black tracking-tighter text-white mix-blend-exclusion -ml-[0.05em]"
                        >
                            Get in touch
                        </motion.h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-32 max-w-5xl">
                        {/* Disclaimer */}
                        <div className="space-y-6">
                            <motion.h3
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-4xl md:text-5xl font-bold uppercase leading-[0.9] tracking-tight"
                            >
                                I'M NOTORIOUSLY<br />
                                SLOW AT GETTING<br />
                                BACK TO EMAILS
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-white/50 text-xs uppercase tracking-widest max-w-sm"
                            >
                                IN A HURRY? PLEASE CONTACT MY AWESOME PRODUCERS
                            </motion.p>
                        </div>

                        {/* Links/Locations */}
                        <div className="space-y-0 divide-y divide-white/20 border-t border-white/20 md:border-t-0">
                            {[
                                { name: "United Kingdom", delay: 0.5 },
                                { name: "France", delay: 0.6 },
                                { name: "United States", delay: 0.7 },
                                { name: "Middle East", delay: 0.8 }
                            ].map((item) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: item.delay, duration: 0.5 }}
                                    className="flex justify-between items-center group cursor-pointer py-4 hover:pl-2 transition-all duration-300"
                                >
                                    <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Utility */}
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-24">
                        <p className="text-[10px] text-white/30 uppercase tracking-widest">
                            All Rights Reserved © {new Date().getFullYear()}
                        </p>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest hidden md:block">
                            Kang Quintus x Agentic
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-[10px] uppercase tracking-widest hover:text-white/50 transition-colors"
                        >
                            ↑ Back to top
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    );
}
