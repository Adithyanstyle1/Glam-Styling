import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Sparkles } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Isabella Rodriguez",
      location: "Barcelona, Spain",
      role: "Bride",
      content: "Glam Styling made my destination wedding absolutely magical. The team traveled to our venue in Mallorca and created the most beautiful, timeless look that lasted through our 12-hour celebration. Every photo is perfect!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces"
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      role: "Fashion Model",
      content: "Working with this team for my Vogue India shoot was incredible. They understood my vision perfectly and created looks that were both avant-garde and authentically beautiful. True artists!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces"
    },
    {
      name: "Sophie Chen",
      location: "Los Angeles, USA",
      role: "Celebrity Client",
      content: "From red carpets to intimate events, Glam Styling consistently delivers flawless results. Their professionalism and discretion are unmatched. I trust them completely with my image.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=faces"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary text-elegant uppercase tracking-widest">Testimonials</span>
            <Sparkles className="w-6 h-6 text-primary ml-2" />
          </div>
          <h2 className="text-luxury text-4xl md:text-6xl font-bold mb-6">
            Global Love
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our international clients who trusted us with their most important moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-card border-border hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed italic pl-6">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};