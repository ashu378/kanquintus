"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

// Film Database - keys must match slugs from /films page
const films: Record<string, {
    title: string;
    year: string;
    genre: string;
    duration: string;
    status: string;
    poster: string;
    role: string;
    synopsis: string;
    awards: string[];
    credits: { director: string; cast: string[] };
}> = {
    "fishermans-diary": {
        title: "The Fisherman's Diary",
        year: "2020",
        genre: "Drama",
        duration: "2h 23m",
        status: "Released",
        poster: "/images/work/fishermans-diary-netflix-v2.jpg",
        role: "Lead Actor ('Solomon') & Producer",
        synopsis: "Inspired by Nobel Peace Prize winner Malala Yousafzai, The Fisherman's Diary follows Ekah, a 12-year-old girl who is determined to go to school in a village of fishermen where the education of a girl child is considered a taboo. Her drive to break this old adage gets her embroiled with her father's past.",
        awards: ["Best Film - AMAA 2020", "Cameroon Entry for Oscars 2021", "Best Actor - Paris Film Festival"],
        credits: {
            director: "Enah Johnscott",
            cast: ["Kang Quintus", "Faith Fidel", "Ramsey Nouah", "Daphne Njie"]
        }
    },
    "nganu": {
        title: "Nganu",
        year: "2023",
        genre: "Psychological Drama",
        duration: "1h 50m",
        status: "Released",
        poster: "/images/work/nganu-title-v2.png",
        role: "Lead Actor & Producer",
        synopsis: "A psychological drama delving into the cycle of domestic violence. Nganu, a man haunted by his past, struggles to contain his demons while trying to hold his family together in a village that watches in silence.",
        awards: ["Ecrans Noir Selection"],
        credits: {
            director: "Kang Quintus",
            cast: ["Kang Quintus", "Muriel Blanche"]
        }
    },
    "mabanda": {
        title: "Mabanda",
        year: "2026",
        genre: "Epic / Historical",
        duration: "TBA",
        status: "Upcoming",
        poster: "/images/work/mabanda-poster.jpg",
        role: "Lead Actor, Producer",
        synopsis: "An epic tale of power, betrayal, and redemption. The story of a kingdom at the crossroads of history, and the warrior who must decide its fate. Filmed across three countries with an international cast.",
        awards: [],
        credits: {
            director: "Kang Quintus",
            cast: ["To Be Announced"]
        }
    },
    "planters-plantation": {
        title: "The Planters Plantation",
        year: "2022",
        genre: "Drama",
        duration: "1h 55m",
        status: "Released",
        poster: "/images/work/planters.jpg",
        role: "Executive Producer",
        synopsis: "A powerful drama exploring the intersections of land, legacy, and the weight of history in a rapidly changing world.",
        awards: [],
        credits: {
            director: "Production Team",
            cast: ["Ensemble Cast"]
        }
    },
    "therapy": {
        title: "Therapy",
        year: "2021",
        genre: "Drama / Thriller",
        duration: "1h 40m",
        status: "Released",
        poster: "/images/work/therapy.jpg",
        role: "Co-Producer",
        synopsis: "A gripping psychological thriller that explores the boundaries between healer and patient, and the secrets we keep hidden even from ourselves.",
        awards: [],
        credits: {
            director: "Production Team",
            cast: ["Ensemble Cast"]
        }
    },
    "rejected": {
        title: "Rejected",
        year: "2022",
        genre: "Drama",
        duration: "1h 55m",
        status: "Released",
        poster: "/images/work/rejected-poster.jpg",
        role: "Executive Producer",
        synopsis: "A gripping drama exploring themes of abandonment and resilience.",
        awards: [],
        credits: {
            director: "Production Team",
            cast: ["Ensemble Cast"]
        }
    },
    "retaliation": {
        title: "Retaliation",
        year: "2021",
        genre: "Drama",
        duration: "1h 45m",
        status: "Released",
        poster: "/images/work/retaliation-poster.jpg",
        role: "Lead Actor & Producer",
        synopsis: "RETALIATION...a movie that uncovers the perception of a killer who is said to kill without conscience, in an attempt to express his malevolence. His unquenchable thirst for money and heart stricken memories of the past drives him into a telepathic state. The price of ego and the unhealed scars of betrayal is what this masterpiece uncovers.",
        awards: [],
        credits: {
            director: "Director",
            cast: ["Kang Quintus", "Ensemble Cast"]
        }
    },
    "untitled-project": {
        title: "Coming Soon",
        year: "2027",
        genre: "In Development",
        duration: "TBA",
        status: "In Development",
        poster: "/images/work/untitled.jpg",
        role: "Director",
        synopsis: "A new project currently in early development. More details to be announced.",
        awards: [],
        credits: {
            director: "Kang Quintus",
            cast: ["To Be Announced"]
        }
    }
};

export default function FilmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const film = films[slug];

    if (!film) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans">

            {/* Hero Section */}
            <section className="relative min-h-[80vh] w-full flex flex-col justify-end overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={film.poster}
                        alt={film.title}
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                {/* Back Link */}
                <div className="absolute top-24 left-6 md:left-12 z-20">
                    <Link
                        href="/films"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 md:px-12 pb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4"
                    >
                        {film.genre} — {film.year}
                    </motion.p>
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter"
                        >
                            {film.title}
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
                <div className="grid md:grid-cols-12 gap-12 md:gap-24">

                    {/* Synopsis */}
                    <div className="md:col-span-8 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-6"
                        >
                            <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Synopsis</h2>
                            <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                                {film.synopsis}
                            </p>
                        </motion.div>

                        {/* Awards */}
                        {film.awards.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <h2 className="text-xs font-bold uppercase tracking-widest text-white/50">Awards & Recognition</h2>
                                <ul className="space-y-3">
                                    {film.awards.map(award => (
                                        <li key={award} className="text-lg text-white/80 flex items-center gap-3">
                                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                                            {award}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>

                    {/* Credits Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-4 space-y-8"
                    >
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Status</p>
                                <p className="text-xl font-bold">{film.status}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Duration</p>
                                <p className="text-xl font-bold">{film.duration}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Role</p>
                                <p className="text-xl font-bold text-red-500">{film.role}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Director</p>
                                <p className="text-xl font-bold">{film.credits.director}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Cast</p>
                                <div className="flex flex-wrap gap-2">
                                    {film.credits.cast.map(c => (
                                        <span key={c} className="text-sm text-white/70 bg-white/5 px-3 py-1 rounded-sm">{c}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-12 border-t border-white/10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <Link
                        href="/films"
                        className="inline-flex items-center gap-2 text-lg font-bold text-white/50 hover:text-white transition-colors group"
                    >
                        View All Work
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </section>

        </div>
    );
}
