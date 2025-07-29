import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";
import portfolioImage from "@/assets/portfolio-showcase.jpg";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Bridal", "Editorial", "Celebrity"];
  
  const portfolioItems = [
    {
      id: 1,
      category: "Bridal",
      title: "Royal Wedding in Monaco",
      description: "Timeless elegance for a destination wedding",
      image: portfolioImage
    },
    {
      id: 2,
      category: "Editorial",
      title: "Vogue Fashion Spread",
      description: "Avant-garde beauty for high fashion",
      image: portfolioImage
    },
    {
      id: 3,
      category: "Celebrity",
      title: "Red Carpet Premiere",
      description: "Glamorous look for A-list celebrity",
      image: portfolioImage
    },
    {
      id: 4,
      category: "Bridal",
      title: "Indian Wedding Ceremony",
      description: "Cultural beauty with modern touches",
      image: portfolioImage
    },
    {
      id: 5,
      category: "Editorial",
      title: "Harper's Bazaar Cover",
      description: "Striking beauty for magazine cover",
      image: portfolioImage
    },
    {
      id: 6,
      category: "Celebrity",
      title: "Awards Show Glam",
      description: "Show-stopping look for major awards",
      image: portfolioImage
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary text-elegant uppercase tracking-widest">Portfolio</span>
            <Sparkles className="w-6 h-6 text-primary ml-2" />
          </div>
          <h2 className="text-luxury text-4xl md:text-6xl font-bold mb-6">
            Our Artistry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of transformative beauty work spanning 
            international weddings, high-fashion editorials, and celebrity events.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-luxury" : "btn-outline-luxury"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button size="sm" className="btn-luxury w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-luxury text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-elegant">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};