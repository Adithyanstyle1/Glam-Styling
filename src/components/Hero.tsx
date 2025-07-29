import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-makeup.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional makeup artistry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="stagger-children">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary-glow mr-3" />
            <span className="text-luxury text-xl tracking-wide">Glam Styling</span>
            <Sparkles className="w-8 h-8 text-primary-glow ml-3" />
          </div>
          
          <h1 className="text-luxury text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Empower Your Beauty.
            <span className="block text-primary-glow">Globally.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-elegant">
            From international brides to editorial shoots, we create stunning makeup artistry 
            that transcends borders and defines luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-luxury group">
              Book Your Session
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="btn-outline-luxury">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};