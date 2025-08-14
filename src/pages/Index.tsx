import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/ui/lead-form";
import { ArrowRight, TrendingUp, Clock, Shield, Users, CheckCircle, Star, Building2, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Index = () => {
  const stats = [
    { number: "$500M+", label: "Loans Funded", icon: DollarSign },
    { number: "2,500+", label: "Successful Projects", icon: Building2 },
    { number: "15+", label: "Years Experience", icon: Star },
    { number: "95%", label: "Client Satisfaction", icon: Users }
  ];

  const borrowerBenefits = [
    { icon: Clock, title: "Fast Funding", description: "Get approved in 24-48 hours, funded in 5-7 days" },
    { icon: TrendingUp, title: "Asset-Based", description: "Focus on property value, not just credit scores" },
    { icon: Shield, title: "Flexible Terms", description: "Customized loan structures for your project" }
  ];

  const investorBenefits = [
    { icon: TrendingUp, title: "Strong Returns", description: "Target returns of 8-15% annually" },
    { icon: Shield, title: "Asset-Backed", description: "All investments secured by real estate" },
    { icon: Users, title: "Professional Management", description: "Expert oversight and transparent reporting" }
  ];

  const testimonials = [
    {
      name: "Mike Johnson",
      role: "Real Estate Investor",
      content: "Anchor Point made it possible to close on a great deal in just 5 days. Their speed and flexibility are unmatched."
    },
    {
      name: "Sarah Williams", 
      role: "Private Investor",
      content: "I've been investing with them for 3 years. Consistent returns and excellent communication throughout."
    },
    {
      name: "David Chen",
      role: "Property Developer", 
      content: "Finally, a lender that understands real estate investors. They've been our go-to for bridge financing."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-primary to-primary-hover text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Real Estate Lending<br />
              <span className="text-accent">By Investors, For Investors</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Fast, flexible financing for real estate investors and secure investment opportunities 
              backed by real estate assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/borrowers">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  I Need Financing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/investors">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  I Want to Invest
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Two Paths to Real Estate Success
            </h2>
            <p className="text-xl text-muted-foreground mb-16">
              Whether you need capital to close deals or want to invest in real estate-backed returns, 
              we have the expertise and solutions to help you succeed.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Borrowers Path */}
              <Card className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">For Borrowers</CardTitle>
                  <p className="text-muted-foreground">Fast, flexible real estate financing</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {borrowerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <benefit.icon className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/borrowers">
                    <Button variant="cta" className="w-full">
                      Explore Loan Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Investors Path */}
              <Card className="hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">For Investors</CardTitle>
                  <p className="text-muted-foreground">Secure, asset-backed investment opportunities</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {investorBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <benefit.icon className="w-5 h-5 text-accent mt-1" />
                        <div>
                          <h4 className="font-semibold">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/investors">
                    <Button variant="cta" className="w-full">
                      View Investment Options
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose Anchor Point Lending?
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience the difference of working with real estate professionals who understand your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real Estate Expertise</h3>
                <p className="text-muted-foreground">
                  Our team consists of active real estate investors who understand market dynamics and investment strategies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Speed & Efficiency</h3>
                <p className="text-muted-foreground">
                  Fast approvals and funding to help you close deals quickly when opportunities arise.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency & Trust</h3>
                <p className="text-muted-foreground">
                  Clear communication, honest dealings, and transparent processes in every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of satisfied borrowers and investors who trust Anchor Point Lending
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Whether you need financing for your next deal or want to invest in real estate-backed returns, 
                  our team is here to help you achieve your goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Free consultation with our experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Fast response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>No obligation, no hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Transparent process from start to finish</span>
                  </div>
                </div>
              </div>
              <div>
                <LeadForm 
                  title="Get Started Today" 
                  subtitle="Connect with our team for personalized solutions"
                  type="general"
                  className="bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
