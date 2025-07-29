import { Sparkles, Instagram, Youtube, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary-glow mr-3" />
              <span className="text-luxury text-2xl font-semibold">Glam Styling</span>
            </div>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed max-w-md">
              Empowering beauty globally through luxury makeup artistry. 
              From international brides to editorial shoots, we create 
              transformative beauty experiences that transcend borders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary-glow" />
              </a>
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-primary-glow" />
              </a>
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary-glow" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-luxury font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-accent-foreground/80 hover:text-primary-glow transition-colors">Bridal Beauty</a></li>
              <li><a href="#services" className="text-accent-foreground/80 hover:text-primary-glow transition-colors">Editorial & Fashion</a></li>
              <li><a href="#services" className="text-accent-foreground/80 hover:text-primary-glow transition-colors">Celebrity & VIP</a></li>
              <li><a href="#portfolio" className="text-accent-foreground/80 hover:text-primary-glow transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-luxury font-semibold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary-glow mr-3" />
                <span className="text-accent-foreground/80 text-sm">hello@glamstyling.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-glow mr-3" />
                <span className="text-accent-foreground/80 text-sm">+1 (555) 123-GLAM</span>
              </div>
              <p className="text-accent-foreground/60 text-sm">
                Global locations: New York, London, Paris
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-accent-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Glam Styling. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-foreground/60 hover:text-primary-glow transition-colors">Privacy Policy</a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary-glow transition-colors">Terms of Service</a>
              <a href="#" className="text-accent-foreground/60 hover:text-primary-glow transition-colors">Booking Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};