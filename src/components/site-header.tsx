"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SiteHeader() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        // If menu is open, don't hide the header
        if (isMenuOpen) {
            setHidden(false);
            return;
        }

        // Determine scroll direction and threshold
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        // Determine if scrolled significantly
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    const menuLinks = [
        { href: "/", label: "Bio" },
        { href: "/films", label: "Work" },
        { href: "/mabanda", label: "Mabanda 2026", highlight: true },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-[60] px-6 md:px-12 py-6 flex items-center justify-between transition-colors duration-300 ${scrolled || isMenuOpen ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="z-[70]" onClick={() => setIsMenuOpen(false)}>
                    <span className="text-xl font-bold tracking-tighter text-white mix-blend-exclusion">KQ</span>
                </Link>

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-xs font-bold uppercase tracking-widest transition-colors ${link.highlight ? 'text-red-500 hover:text-red-400' : 'text-white hover:text-white/70'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-6 z-[70]">
                    <button className="text-white hover:text-white/70 transition-colors">
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white hover:text-white/70 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[55] bg-black flex flex-col items-center justify-center space-y-8 h-screen w-screen"
                    >
                        {menuLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-[12vw] font-black uppercase tracking-tighter ${link.highlight ? 'text-red-500' : 'text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
