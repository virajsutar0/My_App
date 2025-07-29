import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { SearchSection } from "@/components/ui/search-section";
import { CategoriesSection } from "@/components/ui/categories-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SearchSection />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
