"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlayCircle, Award, Calendar } from "lucide-react";

export default function MabandaPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105 animate-pulse-slow"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1549497558-75c13b28489c?q=80&w=2687&auto=format&fit=crop')"
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-bold">Kang Quintus Presents</p>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                            MABANDA
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase mb-8">
                            Coming 2026
                        </p>

                        <div className="flex justify-center gap-6">
                            <Button className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg">
                                Watch Teaser (Coming Soon)
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Synopsis */}
            <section className="py-24 bg-zinc-900 border-t border-white/5">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-primary/10">
                        {/* Poster Placeholder */}
                        <Image
                            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop"
                            alt="Mabanda Poster"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-serif font-bold text-primary">The Legend Returns</h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                <span className="text-white font-medium">Mabanda</span> is an epic tale of power, betrayal, and redemption set against the backdrop of a changing Africa.
                                Following the massive success of "The Fisherman's Diary", Kang Quintus returns to the director's chair for his most ambitious project yet.
                            </p>
                            <p>
                                Filmed across three countries with an international cast, Mabanda promises to redefine the scale of African cinema. The story follows a young warrior forced to choose between his heritage and the future of his people.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <Award className="text-primary h-6 w-6" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase">Genre</p>
                                    <p className="text-white font-serif text-lg">Historical Epic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="text-primary h-6 w-6" />
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase">Release</p>
                                    <p className="text-white font-serif text-lg">Summer 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credits/Cast Placeholder */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif mb-12">Cast & Crew</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-4">
                                <div className="aspect-[3/4] bg-zinc-900 rounded-sm relative overflow-hidden group">
                                    {/* Placeholder Cast Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                                        <span className="text-4xl font-serif opacity-20">?</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-medium">To Be Announced</p>
                                    <p className="text-primary text-sm">Lead Role</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
