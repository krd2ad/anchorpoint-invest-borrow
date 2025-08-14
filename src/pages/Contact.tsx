import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/ui/lead-form";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Anchor Point Lending | Real Estate Lending & Investing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Anchor Point Lending. Whether you\'re seeking a loan or looking to invest in secured real estate lending, our team is ready to help.');
    }
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Toll-free: (800) 123-4567"],
      description: "Speak directly with our lending specialists"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@anchorpointlending.com", "support@anchorpointlending.com"],
      description: "Send us your questions or loan inquiries"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Financial District", "New York, NY 10004"],
      description: "Visit our Manhattan headquarters"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM EST", "Saturday: 9:00 AM - 2:00 PM EST"],
      description: "We're here when you need us"
    }
  ];

  const departments = [
    {
      title: "Lending Department",
      email: "loans@anchorpointlending.com",
      phone: "(555) 123-4567 ext. 1",
      description: "For loan applications, underwriting, and borrower support"
    },
    {
      title: "Investor Relations",
      email: "investors@anchorpointlending.com", 
      phone: "(555) 123-4567 ext. 2",
      description: "For investment opportunities and investor services"
    },
    {
      title: "Customer Support",
      email: "support@anchorpointlending.com",
      phone: "(555) 123-4567 ext. 3", 
      description: "For account management and general inquiries"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Whether you're ready to start a loan, invest in secured real estate lending, or just have questions — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Multiple ways to reach our team</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-3">{method.title}</h3>
                  <div className="space-y-1 mb-3">
                    {method.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm font-medium">{detail}</div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Department Contacts</h2>
            <p className="text-xl text-muted-foreground">Reach the right team for your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{dept.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{dept.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <a href={`mailto:${dept.email}`} className="text-sm hover:text-accent transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-accent" />
                      <a href={`tel:${dept.phone.replace(/[^\d]/g, '')}`} className="text-sm hover:text-accent transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <LeadForm 
                  title="Send Message" 
                  subtitle="We'll respond within 24 hours"
                  type="general"
                />
              </div>
              
              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Expert Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          Get personalized advice from experienced real estate lending professionals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Fast Response</h4>
                        <p className="text-sm text-muted-foreground">
                          We understand time is critical in real estate - expect a response within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Direct Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Speak directly with decision-makers, not call center representatives
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Urgent Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For time-sensitive loan applications or investment opportunities, 
                      please call us directly for immediate assistance.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <a href="tel:(555) 123-4567" className="font-semibold hover:text-accent transition-colors">
                          (555) 123-4567
                        </a>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Available Monday - Friday, 8:00 AM - 6:00 PM EST
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Anchor Point Lending — By Investors, For Investors
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;