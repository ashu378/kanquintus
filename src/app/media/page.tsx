"use client";

import { Button } from "@/components/ui/button";
import { Download, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const photos = [
    "https://images.unsplash.com/photo-1533241240166-70e9dd17fb57?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549497558-75c13b28489c?q=80&w=2687&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2148&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
];

export default function MediaPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Press & Media</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Resources for press, event organizers, and partners.
                    </p>
                </div>

                {/* Press Kit Download */}
                <section className="mb-20">
                    <div className="bg-card border border-white/10 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <FileText className="text-primary" /> Official Press Kit
                            </h2>
                            <p className="text-muted-foreground max-w-md">
                                Includes high-res headshots, official biography (short & long), filmography list, and contact information.
                            </p>
                        </div>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-black">
                            <Download className="mr-2 h-4 w-4" /> Download PDF (25MB)
                        </Button>
                    </div>
                </section>

                {/* Gallery */}
                <section className="mb-20">
                    <h2 className="text-2xl font-serif font-bold mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
                        <ImageIcon className="text-primary" /> Press Photos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {photos.map((src, i) => (
                            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer bg-muted">
                                <Image
                                    src={src}
                                    alt={`Gallery image ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Articles */}
                <section>
                    <h2 className="text-2xl font-serif font-bold mb-8 border-b border-white/10 pb-4">Selected Press</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="block p-6 bg-card border border-white/5 hover:border-primary/30 transition-colors rounded-sm group">
                                <p className="text-xs text-primary uppercase tracking-wider mb-2">Variety • 2024</p>
                                <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
                                    "Kang Quintus brings African cinema to the global stage with upcoming epic."
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
