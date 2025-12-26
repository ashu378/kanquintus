"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isLightPage = pathname?.startsWith("/contact") || pathname?.startsWith("/films") || pathname === "/mabanda";
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const textColor = isLightPage ? "text-[#100F0F]" : "text-white";
    const borderColor = isLightPage ? "border-[#100F0F]/30" : "border-white/30";

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

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




    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[60] px-6 md:px-12 pt-20 pb-20 md:pt-[112px] md:pb-[112px] flex items-center justify-between bg-transparent pointer-events-none"
        >
            {/* Left: Bio & Work */}
            <nav className="flex items-center gap-4 md:gap-8 pointer-events-auto">
                <Link
                    href="/"
                    className={`text-base md:text-[17.4px] transition-colors ${textColor} hover:opacity-50`}
                >
                    Bio
                </Link>
                <Link
                    href="/films"
                    className={`text-base md:text-[17.4px] transition-colors ${textColor} hover:opacity-50`}
                >
                    Work
                </Link>
            </nav>

            {/* Right: Contact */}
            <div className="flex items-center gap-4 md:gap-6 z-[70] pointer-events-auto">
                <Link
                    href="/contact"
                    className={`text-base md:text-[17.4px] transition-colors ${textColor} hover:opacity-50`}
                >
                    Contact
                </Link>
            </div>
        </motion.header>
    );
}
