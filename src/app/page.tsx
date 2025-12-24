import { HeroSection } from "@/components/home/hero-section";
import { CareerSnapshot } from "@/components/home/career-snapshot";
import { FeaturedWorks } from "@/components/home/featured-works";
import { AwardsPreview } from "@/components/home/awards-preview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AwardsPreview />
      <CareerSnapshot />
      <FeaturedWorks />
    </div>
  );
}
