"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function SiteHeader() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // Determine scroll direction and threshold
        // If scrolling DOWN and past 150px, hide header
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            // If scrolling UP or at top, show header
            setHidden(false);
        }

        // Determine if scrolled significantly for styling (background glass)
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-colors duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            {/* Logo */}
            <Link href="/" className="z-50">
                <span className="text-xl font-bold tracking-tighter text-white mix-blend-exclusion">KQ</span>
            </Link>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-xs font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                    Bio
                </Link>
                <Link href="/films" className="text-xs font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                    Work
                </Link>
                <Link href="/mabanda" className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors">
                    Mabanda 2026
                </Link>
                <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                    Contact
                </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="text-white hover:text-white/70 transition-colors">
                    <Search className="w-5 h-5" />
                </button>
                <button className="md:hidden text-white hover:text-white/70 transition-colors">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.header>
    );
}
