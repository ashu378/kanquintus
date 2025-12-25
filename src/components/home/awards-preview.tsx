"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Medal, Crown, Globe } from "lucide-react";

export function AwardsPreview() {
    return (
        <section className="py-16 md:py-32 bg-black text-white px-6 md:px-12 border-b border-white/10">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center gap-24">

                {/* Header Statement */}
                <div className="space-y-6">
                    <span className="text-xs uppercase tracking-widest text-white/40 block">
                        Awards & Recognition
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight">
                        “Kang was awarded the coveted <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">AMAA Best Actor</span> for his <br />
                        performance in 2020.”
                    </h2>
                    <p className="text-white/40 text-sm uppercase tracking-widest mt-4">
                        Total 29 Awards
                    </p>
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-20 opacity-70">
                    <div className="flex flex-col items-center gap-4 group">
                        <Trophy size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">AMAA Awards</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <Globe size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">Netflix Global</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <Star size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">Ecrans Noir</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <Medal size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">Paris Film Fest</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <Crown size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">Sidney Int.</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 group">
                        <Award size={64} strokeWidth={1} className="text-white group-hover:text-yellow-400 transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-widest">D&AD Dir.</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
