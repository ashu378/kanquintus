"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FilmCardProps {
    title: string;
    year: string;
    role: string;
    status?: "Released" | "Upcoming" | "In Production";
    image: string;
    slug: string;
    className?: string;
    featured?: boolean;
}

export function FilmCard({ title, year, role, status = "Released", image, slug, className, featured = false }: FilmCardProps) {
    return (
        <Link href={`/films/${slug}`}>
            <motion.div
                className={cn("group relative overflow-hidden rounded-sm bg-card aspect-[2/3] cursor-pointer", className)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                {/* Poster Image */}
                <div className="absolute inset-0 bg-muted">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <Badge
                        variant={status === "Released" ? "secondary" : "default"}
                        className={cn(
                            "uppercase tracking-widest text-[10px] rounded-sm px-2 py-1 font-bold",
                            status === "Upcoming" && "bg-primary text-primary-foreground",
                            status === "Released" && "bg-white/10 text-white backdrop-blur-md border-white/20"
                        )}
                    >
                        {status}
                    </Badge>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
                    <div className="space-y-1">
                        <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{year}</p>
                        <h3 className={cn("font-serif font-bold text-white leading-tight", featured ? "text-3xl" : "text-xl")}>
                            {title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm font-medium pt-1">
                            {role}
                        </p>
                    </div>

                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <span className="inline-block border-b border-primary text-primary text-xs tracking-wider uppercase pb-1">
                            View Project
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
