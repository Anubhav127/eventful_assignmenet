import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <CategorySection />
      </main>
    </div>
  )
}
