import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Briefcase } from "lucide-react";

export const SearchSection = () => {
  return (
    <section className="py-20 bg-gradient-card border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Find Your Perfect
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Match</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover top talent or find your next opportunity with our intelligent matching system
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-glass">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Main Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Search by skills, role, or keywords..."
                    className="pl-12 h-14 bg-background/50 border-white/10 text-lg"
                  />
                </div>
                
                {/* Location Filter */}
                <div className="lg:w-64 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="Location"
                    className="pl-12 h-14 bg-background/50 border-white/10 text-lg"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="lg:w-64 relative">
                  <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <select className="w-full h-14 pl-12 pr-4 bg-background/50 border border-white/10 rounded-lg text-foreground text-lg appearance-none">
                    <option value="">All Categories</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="writing">Writing</option>
                  </select>
                </div>
                
                {/* Search Button */}
                <Button size="lg" className="bg-gradient-primary hover:shadow-purple h-14 px-8 group">
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Search
                </Button>
              </div>
              
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-primary/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
                <div className="text-sm text-muted-foreground self-center">Popular:</div>
                {['React Developer', 'UI/UX Designer', 'Content Writer', 'Data Analyst'].map((tag) => (
                  <Button 
                    key={tag}
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary/10 hover:text-primary-hover"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">2.5M+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">180+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">$2B+</div>
              <div className="text-sm text-muted-foreground">Paid to Freelancers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};