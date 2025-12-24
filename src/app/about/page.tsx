"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">

            {/* Bio Header */}
            <section className="container mx-auto px-4 mb-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-[3/4] md:aspect-square overflow-hidden rounded-sm"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1533241240166-70e9dd17fb57?q=80&w=2340&auto=format&fit=crop"
                            alt="Kang Quintus"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 border border-white/10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Kang Quintus</h1>
                        <p className="text-xl text-primary font-medium tracking-wide">Actor • Director • Producer • Entrepreneur</p>
                        <div className="h-px w-20 bg-primary/50" />
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Kang Quintus is a multi-award-winning Cameroonian filmmaker whose work bridges the gap between African storytelling and global cinema.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Best known for the Netflix-acquired masterpiece <strong>The Fisherman’s Diary</strong>, he has established himself as a producer of high-quality, socially impactful films. His passion lies in telling authentic stories that challenge narratives and inspire change.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <Link href="/contact">
                                <Button className="bg-primary text-black hover:bg-primary/90">Contact for Booking</Button>
                            </Link>
                            <Link href="/media">
                                <Button variant="outline">Download Press Kit</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Production Company */}
            <section className="bg-muted/30 py-20 border-y border-white/5">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold mb-6">Kang Quintus Films</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Founded with a vision to revolutionize the Cameroonian film industry, Kang Quintus Films focuses on premium production values, compelling narratives, and global distribution.
                    </p>
                    <Link href="/films">
                        <Button variant="link" className="text-primary text-lg">
                            Explore our Productions <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
