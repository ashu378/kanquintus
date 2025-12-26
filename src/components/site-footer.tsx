"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Film, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export function SiteFooter() {
    const pathname = usePathname();
    const isContactPage = pathname?.startsWith("/contact");

    const bgColor = isContactPage ? "bg-[#E5E5E5]" : "bg-black";
    const textColor = isContactPage ? "text-[#100F0F]" : "text-white";
    const borderColor = isContactPage ? "border-[#100F0F]/10" : "border-white/10";
    const accentBorderColor = isContactPage ? "border-[#100F0F]" : "border-white";
    const subTextColor = isContactPage ? "text-[#100F0F]/50" : "text-white/50";
    const ultraSubTextColor = isContactPage ? "text-[#100F0F]/30" : "text-white/30";
    const accentBgColor = isContactPage ? "bg-[#100F0F]" : "bg-white";

    const socials = [
        { name: "Facebook", href: "https://web.facebook.com/kangquintus/?_rdc=1&_rdr#", icon: Facebook },
        { name: "Instagram", href: "https://www.instagram.com/kangquintus/?hl=en", icon: Instagram },
        { name: "IMDb", href: "https://www.imdb.com/name/nm6886375/", icon: Film },
    ];

    return (
        <footer className={`${bgColor} ${textColor} pt-20 pb-6 md:pb-12 px-6 md:px-12 border-t ${borderColor}`}>
            <div className="max-w-[1800px] mx-auto grid md:grid-cols-12 gap-12">

                {/* Left Column - Label */}
                <div className="md:col-span-2 pt-4 border-t border-white md:border-t-0 md:border-none">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`text-xs uppercase tracking-widest ${subTextColor} block mb-2`}
                    >
                        Contact
                    </motion.span>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className={`w-8 h-[1px] ${accentBgColor} hidden md:block origin-left`}
                    ></motion.div>
                </div>

                {/* Right Content Area */}
                <div className="md:col-span-10 flex flex-col gap-12 md:gap-24">

                    {/* Hero Title - Single Line, Title Case */}
                    <div className={`border-b-2 ${accentBorderColor} pb-2 overflow-hidden w-fit mx-auto`}>
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className={`text-[13vw] leading-[0.85] font-black tracking-tighter ${isContactPage ? '' : 'mix-blend-exclusion'} text-center`}
                        >
                            Get in touch
                        </motion.h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-32 max-w-5xl">
                        {/* Disclaimer & Socials */}
                        <div className="space-y-12">
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
                                    className={`${subTextColor} text-xs uppercase tracking-widest max-w-sm`}
                                >
                                    IN A HURRY? PLEASE CONTACT MY AWESOME PRODUCERS
                                </motion.p>
                            </div>

                            {/* Integrated Social Links */}
                            <div className="space-y-4">
                                <span className={`text-[10px] uppercase font-bold tracking-[0.3em] ${ultraSubTextColor} block mb-6`}>Digital Presence</span>
                                <div className="flex flex-wrap gap-8">
                                    {socials.map((social, i) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.7 + i * 0.1 }}
                                            className="group flex flex-col gap-2"
                                        >
                                            <div className="flex items-center gap-2">
                                                <social.icon className={`w-4 h-4 ${textColor} hover:text-red-500 transition-colors`} />
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                                            </div>
                                            <span className={`text-[9px] uppercase font-bold tracking-widest ${ultraSubTextColor} group-hover:text-current transition-colors`}>{social.name}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Links/Locations */}
                        <div className={`space-y-0 divide-y ${borderColor} border-t ${borderColor} md:border-t-0`}>
                            <h4 className={`text-[10px] uppercase font-bold tracking-widest ${ultraSubTextColor} mb-8 py-4`}>Production Hubs</h4>
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

                    {/* Bottom UtilityArea */}
                    <div className="pt-12 md:pt-24 flex flex-col md:flex-row justify-between items-end md:items-center">
                        <p className={`text-[10px] ${ultraSubTextColor} uppercase tracking-widest`}>
                            All Rights Reserved © {new Date().getFullYear()}
                        </p>
                        <p className={`text-[10px] ${ultraSubTextColor} uppercase tracking-widest hidden md:block`}>
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
