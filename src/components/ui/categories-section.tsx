import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Brain, 
  TrendingUp, 
  PenTool, 
  HeadphonesIcon, 
  Calculator, 
  Scale,
  Users,
  Building
} from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Development & IT",
    description: "Web, mobile, and software development",
    count: "12,500+ freelancers",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "UI/UX, graphic design, branding",
    count: "8,200+ freelancers", 
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Brain,
    title: "AI Services",
    description: "Machine learning, AI development",
    count: "3,400+ freelancers",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description: "Digital marketing, SEO, social media",
    count: "9,800+ freelancers",
    color: "from-green-500 to-cyan-500"
  },
  {
    icon: PenTool,
    title: "Writing & Translation",
    description: "Content writing, copywriting, translation",
    count: "6,700+ freelancers",
    color: "from-orange-500 to-pink-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Admin & Support",
    description: "Virtual assistance, customer support",
    count: "5,300+ freelancers",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Calculator,
    title: "Finance & Accounting",
    description: "Bookkeeping, financial analysis",
    count: "4,100+ freelancers",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Scale,
    title: "Legal",
    description: "Legal consulting, document review",
    count: "2,800+ freelancers",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Users,
    title: "HR & Training",
    description: "Recruitment, training, HR consulting",
    count: "3,600+ freelancers",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Building,
    title: "Engineering & Architecture",
    description: "Civil, mechanical, architectural design",
    count: "2,400+ freelancers",
    color: "from-gray-500 to-blue-500"
  }
];

export const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Browse by 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse marketplace of talented professionals across all industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-card/60 transition-all duration-300 cursor-pointer animate-scale-in hover:scale-105 hover:shadow-purple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${category.color} rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {category.count}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/10 px-8"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};