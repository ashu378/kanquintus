"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

/**
 * Ali Ali-inspired Page Transition Template
 * Handles directional slides and high-end wipe effects.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [direction, setDirection] = useState("left");
    const prevPathname = useRef(pathname);

    useEffect(() => {
        const routes = ["/", "/films", "/contact"];
        const prevIndex = routes.indexOf(prevPathname.current);
        const currIndex = routes.indexOf(pathname);

        // Logic for slide direction
        if (pathname === "/contact") {
            setDirection("up");
        } else if (prevPathname.current === "/contact") {
            setDirection("down");
        } else if (currIndex > prevIndex) {
            setDirection("left"); // Navigating forward (e.g. Bio -> Work)
        } else {
            setDirection("right"); // Navigating backward (e.g. Work -> Bio)
        }

        prevPathname.current = pathname;
    }, [pathname]);

    return (
        <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            custom={direction}
            variants={{
                initial: (dir: string) => ({
                    x: dir === "left" ? "30vw" : dir === "right" ? "-30vw" : 0,
                    y: dir === "up" ? "30vh" : dir === "down" ? "-30vh" : 0,
                    opacity: 0,
                    filter: "blur(10px)"
                }),
                animate: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                        duration: 1.4,
                        ease: [0.16, 1, 0.3, 1],
                        staggerChildren: 0.15
                    }
                }
            }}
            className="w-full relative origin-top"
        >
            {/* The Wipe Overlay */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 bg-white z-[9999] origin-bottom pointer-events-none mix-blend-difference"
            />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
