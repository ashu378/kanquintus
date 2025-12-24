import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FilmGrain } from "@/components/film-grain";

export const metadata: Metadata = {
  title: "Kang Quintus | Official Portfolio",
  description: "Award-Winning Actor, Director & Producer. Official portfolio and filmography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <FilmGrain />
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
