"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "The Fisherman's Diary",
        category: "Feature Film",
        year: "2020",
        role: "Lead Actor",
        image: "/images/work/fishermans-diary-netflix-v2.jpg",
        video: "/videos/fishermans-diary.mp4",
        slug: "fishermans-diary",
        size: "large"
    },
    {
        title: "Mabanda",
        category: "Upcoming Feature",
        year: "2026",
        role: "Lead Actor, Producer",
        image: "/images/work/mabanda-poster.jpg",
        video: "/videos/mabanda-teaser.mp4", // User to replace
        slug: "mabanda",
        size: "normal" // Spans full width or large col
    },
    {
        title: "Nganu",
        category: "Feature Film",
        year: "2023",
        role: "Lead Actor, Producer",
        image: "/images/work/nganu-title-v2.png",
        video: "/videos/nganu.mp4",
        slug: "nganu",
        size: "normal"
    },
    {
        title: "Rejected",
        category: "Feature Film",
        year: "2022",
        role: "Executive Producer",
        image: "/images/work/rejected-poster.jpg",
        video: "/videos/planters.mp4",
        slug: "rejected",
        size: "normal"
    },
    {
        title: "Retaliation",
        category: "Netflix Original",
        year: "2021",
        role: "Lead Actor, Producer",
        image: "/images/work/retaliation-poster.jpg",
        video: "/videos/therapy.mp4",
        slug: "retaliation",
        size: "normal"
    },
    {
        title: "Coming Soon",
        category: "In Development",
        year: "2027",
        role: "Director",
        image: "/images/work/untitled.jpg",
        video: "",
        slug: "untitled-project",
        size: "large"
    }
];

const ProjectItem = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented or video not found
                });
            }
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className={`group relative w-full ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
            <Link href={`/films/${project.slug}`} className="block block-link cursor-pointer">
                {/* Media Container */}
                <div
                    className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 mb-6"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={`object-cover transition-all duration-700 ease-[0.16,1,0.3,1] ${isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'} ${isHovered ? 'scale-105' : 'scale-100'}`}
                        />
                    </div>

                    {/* Video Layer */}
                    <div className="absolute inset-0 z-0">
                        {project.video && (
                            <video
                                ref={videoRef}
                                src={project.video}
                                muted
                                loop
                                playsInline
                                onCanPlay={() => setIsVideoLoaded(true)}
                                className="h-full w-full object-cover"
                            />
                        )}
                        {/* Fallback overlay if no video but we want hover effect */}
                        {/* <div className="absolute inset-0 bg-black/20" /> */}
                    </div>
                </div>

                {/* Text Info */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="overflow-hidden">
                            <motion.h3
                                className="text-3xl md:text-4xl font-bold tracking-tight text-[#100F0F] group-hover:text-[#100F0F]/70 transition-colors duration-500"
                            >
                                {project.title}
                            </motion.h3>
                        </div>
                        <p className="text-sm font-medium tracking-wide text-[#100F0F]/50 uppercase">{project.category} — {project.year}</p>
                    </div>

                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight className="text-[#100F0F] w-6 h-6" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-[#FCF6F4] text-[#100F0F] pt-56 md:pt-[25vh] pb-20 px-6 md:px-12 font-sans">

            {/* Page Header */}
            <div className="mb-24 md:mb-40">
                <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[13vw] leading-[0.8] font-black tracking-tighter text-center"
                >
                    Selected Work
                </motion.h1>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {projects.map((project, index) => (
                    <ProjectItem key={project.slug} project={project} index={index} />
                ))}
            </div>

            {/* Footer / Contact Link */}
            <div className="mt-40 text-center">
                <Link href="/contact" className="inline-block group">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#100F0F] border-b border-transparent group-hover:border-[#100F0F] transition-colors duration-300 pb-1"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest text-[#100F0F]/50 group-hover:text-[#100F0F] transition-colors">Start a Project</span>
                    </motion.div>
                </Link>
            </div>

        </div>
    );
}
