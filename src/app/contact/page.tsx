"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const agencies = [
    {
        region: "UNITED STATES",
        name: "Management & PR",
        address: ["Los Angeles / Washington D.C."],
        phone: "+1 202-594-1938",
        email: "kangquintusfilms@gmail.com",
        website: "instagram.com/kangquintus"
    },
    {
        region: "CAMEROON",
        name: "Production Office",
        address: ["Douala / Yaoundé"],
        phone: "+237 6 77 77 77 77", // Placeholder or generic
        email: "kangquintusfilms@gmail.com",
        website: "kangquintus.com"
    }
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#E5E5E5] text-[#100F0F] pt-56 md:pt-[30vh] pb-20 px-6 md:px-12 font-sans">

            {/* Header Section */}
            <div className="mb-32 md:mb-48">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-[13vw] leading-[0.8] font-black tracking-tighter text-center"
                    >
                        Get in touch
                    </motion.h1>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-12 gap-12 md:gap-y-32">

                {/* CONTACT INFO Label Column */}
                <div className="md:col-span-3">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs font-bold uppercase tracking-widest text-[#100F0F]/50 sticky top-32"
                    >
                        Contact Info
                    </motion.h2>
                </div>

                {/* Agencies List */}
                <div className="md:col-span-9 grid gap-24 md:gap-32">
                    {agencies.map((agency, index) => (
                        <div key={agency.region} className="grid md:grid-cols-2 gap-8 md:gap-0 border-t border-[#100F0F]/10 pt-8 md:pt-0 md:border-none">
                            {/* Region */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                className="md:pr-12"
                            >
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-2 text-[#100F0F]/60">{agency.region}</h3>
                            </motion.div>

                            {/* Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 + 0.1 }}
                                className="space-y-6"
                            >
                                <h4 className="text-2xl font-bold">{agency.name}</h4>

                                <div className="space-y-1 text-sm text-[#100F0F]/70">
                                    {agency.address.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>

                                <div className="space-y-1 text-sm">
                                    {agency.phone && <p className="text-[#100F0F]/70">{agency.phone}</p>}
                                    <a href={`mailto:${agency.email}`} className="block text-[#100F0F] hover:text-[#100F0F]/50 transition-colors">
                                        {agency.email}
                                    </a>
                                </div>

                                <a
                                    href={`https://${agency.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-[#100F0F]/50 transition-colors border-b border-[#100F0F] pb-0.5"
                                >
                                    {agency.website}
                                    <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Direct Contact & Footer */}
            <div className="mt-32 pt-12 border-t border-[#100F0F]/20 grid md:grid-cols-12 gap-12">
                <div className="md:col-span-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#100F0F]/50">Inquiries</span>
                </div>
                <div className="md:col-span-9 grid md:grid-cols-2">
                    <div className="md:col-start-2 space-y-4">
                        <p className="text-sm text-[#100F0F]/70">
                            For film collaborations, press, and general inquiries.
                        </p>
                        <a href="mailto:kangquintusfilms@gmail.com" className="text-xl font-bold hover:text-[#100F0F]/50 transition-colors block">
                            kangquintusfilms@gmail.com
                        </a>
                    </div>
                </div>
            </div>



        </div>
    );
}
