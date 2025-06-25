import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <CategorySection />
      </main>
    </div>
  )
}
