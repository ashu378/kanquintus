"use client";

import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, Play, Calendar, User, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

// Mock Database
const films = {
    "fishermans-diary": {
        title: "The Fisherman's Diary",
        year: "2020",
        genre: "Drama",
        duration: "2h 23m",
        status: "Released",
        poster: "https://images.unsplash.com/photo-1533241240166-70e9dd17fb57?q=80&w=2340&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1533241240166-70e9dd17fb57?q=80&w=2340&auto=format&fit=crop",
        role: "Lead Actor ('Solomon') & Producer",
        synopsis: "Inspired by Nobel Peace Prize winner Malala Yousafzai, The Fisherman’s Diary follows Ekah, a 12-year-old girl who is determined to go to school in a village of fishermen where the education of a girl child is considered a taboo. her drive to break this old adage gets her embroiled with her father's past.",
        awards: ["Best Film - AMAA 2020", "Cameroon Entry for Oscars 2021", "Best Actor - Paris Film Festival"],
        credits: {
            director: "Enah Johnscott",
            cast: ["Kang Quintus", "Faith Fidel", "Ramsey Nouah", "Daphne Njie"]
        },
        trailer: "https://youtube.com"
    },
    "nganu": {
        title: "Nganu",
        year: "2023",
        genre: "Psychological Drama",
        duration: "1h 50m",
        status: "Released",
        poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop",
        role: "Lead Actor & Producer",
        synopsis: "A psychological drama delving into the cycle of domestic violence. Nganu, a man haunted by his past, struggles to contain his demons while trying to hold his family together in a village that watches in silence.",
        awards: ["Ecrans Noir Selection"],
        credits: {
            director: "Kang Quintus",
            cast: ["Kang Quintus", "Muriel Blanche"]
        },
        trailer: "https://youtube.com"
    },
    "mabanda": {
        title: "Mabanda",
        year: "2026",
        genre: "Epic / Historical",
        duration: "TBA",
        status: "Upcoming",
        poster: "https://images.unsplash.com/photo-1549497558-75c13b28489c?q=80&w=2687&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1549497558-75c13b28489c?q=80&w=2687&auto=format&fit=crop",
        role: "Lead Actor, Producer",
        synopsis: "An epic tale of power, betrayal, and redemption. The story of a kingdom at the crossroads of history, and the warrior who must decide its fate.",
        awards: [],
        credits: {
            director: "Kang Quintus",
            cast: ["To Be Announced"]
        },
        trailer: null
    },
    "side-chic-chronicles": {
        title: "Side Chic Chronicles",
        year: "2018",
        genre: "Drama",
        duration: "1h 45m",
        status: "Released",
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2148&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2148&auto=format&fit=crop",
        role: "Actor, Producer",
        synopsis: "A gripping drama exploring the complexities of modern relationships and the consequences of infidelity.",
        awards: [],
        credits: {
            director: "Salem Kessy",
            cast: ["Kang Quintus"]
        },
        trailer: null
    },
    "bed-of-clouds": {
        title: "Bed of Clouds",
        year: "2019",
        genre: "Romance",
        duration: "1h 30m",
        status: "Released",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop",
        backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop",
        role: "Producer",
        synopsis: "A romantic drama about finding love in unexpected places and the challenges of holding onto it.",
        awards: [],
        credits: {
            director: "Director Name",
            cast: ["Cast Name"]
        },
        trailer: null
    }
};

export default function FilmDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // unwrap params (Next.js 15 syntax)
    const { slug } = use(params);
    const film = films[slug as keyof typeof films];

    if (!film) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white pb-20">
            {/* Dynamic Hero */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${film.backdrop}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="absolute top-20 left-4 md:left-20 z-20">
                    <Link href="/films" className="flex items-center text-muted-foreground hover:text-white transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Filmography
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-20 z-10 flex flex-col md:flex-row items-end gap-8">
                    {/* Poster for Desktop */}
                    <div className="hidden md:block w-60 shrink-0 rounded-sm overflow-hidden shadow-2xl border border-white/10">
                        <Image src={film.poster} alt={film.title} width={240} height={360} className="w-full h-auto" />
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="outline" className="text-white border-white/30">{film.genre}</Badge>
                            <Badge className="bg-primary text-black hover:bg-primary/90">{film.status}</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-none">{film.title}</h1>
                        <div className="flex items-center gap-6 text-sm text-gray-300">
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary" /> {film.year}</span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-primary" /> {film.duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-20 mt-12 grid md:grid-cols-3 gap-16">
                <div className="md:col-span-2 space-y-10">
                    {/* Synopsis */}
                    <section>
                        <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Synopsis</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            {film.synopsis}
                        </p>
                    </section>

                    {/* Awards if any */}
                    {film.awards.length > 0 && (
                        <section>
                            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Awards & Recognition</h2>
                            <ul className="grid gap-4">
                                {film.awards.map(award => (
                                    <li key={award} className="flex items-center text-gray-200">
                                        <Award className="w-5 h-5 mr-3 text-primary" /> {award}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                <div className="space-y-8 p-6 bg-zinc-900/50 rounded-sm border border-white/5 h-fit">
                    <div className="space-y-4">
                        <h3 className="text-white font-serif text-xl border-b border-white/10 pb-2">Credits</h3>

                        <div>
                            <p className="text-muted-foreground text-xs uppercase mb-1">Director</p>
                            <p className="text-white">{film.credits.director}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground text-xs uppercase mb-1">Key Role</p>
                            <p className="text-primary">{film.role}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground text-xs uppercase mb-1">Main Cast</p>
                            <div className="flex flex-wrap gap-2">
                                {film.credits.cast.map(c => (
                                    <span key={c} className="text-sm text-gray-300 bg-white/5 px-2 py-1 rounded-sm">{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {film.trailer && (
                        <Button className="w-full bg-white text-black hover:bg-gray-200">
                            <Play className="w-4 h-4 mr-2" /> Watch Trailer
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
