import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, MapPin, Sparkles, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary text-elegant uppercase tracking-widest">Contact</span>
            <Sparkles className="w-6 h-6 text-primary ml-2" />
          </div>
          <h2 className="text-luxury text-4xl md:text-6xl font-bold mb-6">
            Let's Create Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your vision into reality? 
            Connect with us to discuss your beauty journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-luxury text-2xl font-semibold mb-6">
                Book Your Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" className="border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Select a service</option>
                    <option>Bridal Makeup</option>
                    <option>Editorial Shoot</option>
                    <option>Celebrity/VIP</option>
                    <option>Special Event</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Event Date</label>
                  <Input type="date" className="border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input placeholder="City, Country" className="border-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tell us about your vision</label>
                  <Textarea 
                    placeholder="Describe your event, style preferences, and any special requirements..."
                    rows={4}
                    className="border-border"
                  />
                </div>
                
                <Button className="btn-luxury w-full group">
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-luxury text-2xl font-semibold mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@glamstyling.com</p>
                      <p className="text-muted-foreground">bookings@glamstyling.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-GLAM</p>
                      <p className="text-muted-foreground">24/7 for VIP clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Locations</h4>
                      <p className="text-muted-foreground">New York • London • Paris</p>
                      <p className="text-muted-foreground">Global travel available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 mt-1">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Booking</h4>
                      <p className="text-muted-foreground">6 months advance recommended</p>
                      <p className="text-muted-foreground">Emergency bookings available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-luxury text-xl font-semibold mb-4">
                  Follow Our Journey
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get inspired by our latest work and beauty tips on social media.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="btn-outline-luxury">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="btn-outline-luxury">
                    TikTok
                  </Button>
                  <Button variant="outline" size="sm" className="btn-outline-luxury">
                    YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};