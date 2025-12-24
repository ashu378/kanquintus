"use client";

import { HeroSection } from "@/components/home/hero-section"; // We might want a smaller hero
import { FilmCard } from "@/components/film-card";
import { motion } from "framer-motion";

const allFilms = [
    {
        title: "Mabanda",
        year: "2026",
        role: "Lead Actor, Producer",
        status: "Upcoming" as const,
        image: "https://images.unsplash.com/photo-1549497558-75c13b28489c?q=80&w=2687&auto=format&fit=crop",
        slug: "mabanda"
    },
    {
        title: "The Fisherman's Diary",
        year: "2020",
        role: "Lead Actor, Producer",
        status: "Released" as const,
        image: "https://images.unsplash.com/photo-1533241240166-70e9dd17fb57?q=80&w=2340&auto=format&fit=crop",
        slug: "fishermans-diary"
    },
    {
        title: "Nganu",
        year: "2023",
        role: "Lead Actor, Producer",
        status: "Released" as const,
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop",
        slug: "nganu"
    },
    {
        title: "Side Chic Chronicles",
        year: "2018",
        role: "Lead Actor, Producer",
        status: "Released" as const,
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2148&auto=format&fit=crop", // Placeholder
        slug: "side-chic-chronicles"
    },
    {
        title: "Bed of Clouds",
        year: "2019",
        role: "Producer",
        status: "Released" as const,
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop", // Placeholder
        slug: "bed-of-clouds"
    },
    {
        title: "Coming Soon Project",
        year: "2027",
        role: "Director",
        status: "In Production" as const,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop", // Placeholder
        slug: "untitled-project"
    }
];

export default function FilmographyPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold mb-4"
                    >
                        Filmography
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        A chronicle of stories told, characters lived, and worlds created.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allFilms.map((film, index) => (
                        <motion.div
                            key={film.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <FilmCard {...film} className="h-full min-h-[450px]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
