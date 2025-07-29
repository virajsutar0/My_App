import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Code, Palette, TrendingUp, PenTool, Brain, HeadphonesIcon } from "lucide-react";

const serviceCategories = [
  {
    icon: Code,
    title: "Development & IT",
    description: "Web, mobile, software development",
    color: "text-purple-400"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "UI/UX, graphics, branding",
    color: "text-pink-400"
  },
  {
    icon: Brain,
    title: "AI Services", 
    description: "Machine learning, AI development",
    color: "text-cyan-400"
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Digital marketing, SEO",
    color: "text-green-400"
  },
  {
    icon: PenTool,
    title: "Writing",
    description: "Content, copywriting",
    color: "text-orange-400"
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Virtual assistance",
    color: "text-indigo-400"
  }
];

export const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 w-full z-50 bg-background/90 backdrop-blur-glass border-b border-white/10 transition-all duration-500 ease-out ${
        isServicesOpen ? 'h-96' : 'h-20'
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="font-display text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Lance Free
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          
          {/* Services with Morph Effect */}
          <button
            className={`flex items-center space-x-1 transition-colors ${
              isServicesOpen ? 'text-primary' : 'text-foreground hover:text-primary'
            }`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span>Services</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                isServicesOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
            Sign In
          </Button>
          <Button className="bg-gradient-primary hover:shadow-purple transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Apple-style Morphing Services Menu */}
      <div 
        className={`hidden md:block overflow-hidden transition-all duration-500 ease-out ${
          isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="bg-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-glass">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Browse Categories</h3>
              <p className="text-muted-foreground">Find the perfect freelancer for your project</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <a
                    key={category.title}
                    href="#"
                    className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <IconComponent className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {category.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for?
                </p>
              </div>
              <Button 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                View All Categories →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-glass border-b border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                Sign In
              </Button>
              <Button className="bg-gradient-primary">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};