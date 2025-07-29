import { Card, CardContent } from "@/components/ui/card";
import { Crown, Camera, Users, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Crown,
      title: "Bridal Beauty",
      description: "Transform your special day with timeless elegance. From intimate ceremonies to grand celebrations, we create flawless bridal looks that photograph beautifully and last all day.",
      features: ["Trial sessions", "Wedding day timeline", "Touch-up kit included", "International travel available"]
    },
    {
      icon: Camera,
      title: "Editorial & Fashion",
      description: "High-fashion makeup for photo shoots, runway shows, and editorial work. We bring artistic vision to life with cutting-edge techniques and trend-setting looks.",
      features: ["Fashion week experience", "Photo-ready techniques", "Creative collaboration", "Portfolio development"]
    },
    {
      icon: Users,
      title: "Celebrity & VIP",
      description: "Discreet, professional service for high-profile clients. Red carpet events, premieres, and special occasions handled with the utmost professionalism and confidentiality.",
      features: ["24/7 availability", "Red carpet experience", "Media-trained team", "Confidentiality guaranteed"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary text-elegant uppercase tracking-widest">Services</span>
            <Sparkles className="w-6 h-6 text-primary ml-2" />
          </div>
          <h2 className="text-luxury text-4xl md:text-6xl font-bold mb-6">
            Luxury Beauty Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevating beauty standards across three distinct specialties, 
            each crafted with precision and artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-card border-border hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-luxury text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-elegant">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};