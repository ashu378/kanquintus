"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const awardList = [
    {
        year: "2024",
        title: "Best Film Strategy",
        organization: "Global Film Market",
        project: "Mabanda (Pre-production)"
    },
    {
        year: "2021",
        title: "Cameroon's Official Entry",
        organization: "The Academy Awards (Oscars)",
        project: "The Fisherman's Diary"
    },
    {
        year: "2020",
        title: "Best Feature Film",
        organization: "Paris Art and Movie Awards",
        project: "The Fisherman's Diary"
    },
    {
        year: "2020",
        title: "Best Actor (Kang Quintus)",
        organization: "I Will Tell International Film Festival",
        project: "The Fisherman's Diary"
    },
    {
        year: "2020",
        title: "Best Screenplay",
        organization: "AMAA Awards",
        project: "The Fisherman's Diary"
    },
    {
        year: "2019",
        title: "Best Producer",
        organization: "Cameroon International Film Festival",
        project: "Side Chic Chronicles"
    }
];

export default function AwardsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Awards & Recognition</h1>
                    <p className="text-muted-foreground text-lg">Celebrating excellence in storytelling and cinematic achievement.</p>
                </div>

                <div className="space-y-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10 hidden md:block" />

                    {awardList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
                        >
                            <div className="flex items-center md:w-32 shrink-0">
                                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 z-10">
                                    <Award className="h-5 w-5 text-primary" />
                                </div>
                                <span className="ml-4 font-bold text-xl md:hidden">{item.year}</span>
                                <span className="hidden md:block font-bold text-xl ml-auto pr-8 text-primary/80">{item.year}</span>
                            </div>

                            <div className="bg-card border border-white/5 p-6 rounded-sm flex-1 hover:border-primary/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-primary font-medium mb-1">{item.organization}</p>
                                <p className="text-sm text-muted-foreground">Project: <span className="text-gray-300 italic">{item.project}</span></p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
