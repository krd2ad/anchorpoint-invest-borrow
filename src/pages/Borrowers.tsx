import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/ui/lead-form";
import { Clock, DollarSign, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import borrowersImage from "@/assets/borrowers-bg.jpg";
import { useEffect } from "react";

const Borrowers = () => {
  useEffect(() => {
    document.title = "Private Real Estate Loans for Investors | Anchor Point Lending";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Close in days, not months. Asset-based lending for fix-and-flip, new construction, and rental properties. Partner with Anchor Point Lending for fast, flexible funding.');
    }
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Funding in days, not weeks",
      description: "Get approved and funded faster than traditional lenders"
    },
    {
      icon: DollarSign,
      title: "No unnecessary hurdles",
      description: "Asset-focused underwriting process"
    },
    {
      icon: TrendingUp,
      title: "Terms that match your project",
      description: "Timeline and exit strategy aligned financing"
    },
    {
      icon: Shield,
      title: "Friendly, knowledgeable team",
      description: "Team who understands investor needs"
    }
  ];

  const projectTypes = [
    {
      title: "Fix-and-Flip",
      description: "Financing for property acquisition and renovation costs",
      features: ["Purchase + rehab costs", "Up to 90% ARV", "12-month terms", "Draw schedule available"]
    },
    {
      title: "New Construction",
      description: "Construction loans for ground-up development projects",
      features: ["Land + construction costs", "Progress-based draws", "18-24 month terms", "Experienced oversight"]
    },
    {
      title: "Rental Property Acquisitions",
      description: "Financing for investment property purchases",
      features: ["Up to 80% LTV", "Cash-out refinance options", "Long-term rental focus", "Quick closings"]
    },
    {
      title: "Bridge Loans",
      description: "Short-term financing to bridge gaps between buying and selling",
      features: ["6-24 month terms", "Up to 80% LTV", "Quick closings", "Interest-only payments"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${borrowersImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast, Flexible Capital for Your Next Deal
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              We know every day counts in real estate. That's why we've built our lending process for speed and clarity. Our focus is on the property's potential — not endless red tape.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Submit Loan Request
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* By Investors, For Investors */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">By Investors, For Investors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the urgency of real estate opportunities because we're investors ourselves. 
            Our streamlined process and flexible terms help you move fast when deals arise.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Anchor Point Lending?</h2>
            <p className="text-xl text-muted-foreground">Fast decisions, flexible terms, investor-focused approach</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Projects We Fund */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Projects We Fund</h2>
            <p className="text-xl text-muted-foreground">Tailored financing solutions for every real estate investment strategy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit your loan request today and keep your project moving.</h2>
                <p className="text-xl mb-6 text-primary-foreground/90">
                  Join thousands of investors who trust Anchor Point Lending for their real estate financing needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>No prepayment penalties</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Flexible underwriting guidelines</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Experienced closing team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Nationwide lending capabilities</span>
                  </li>
                </ul>
              </div>
              <div>
                <LeadForm 
                  title="Get Your Loan Quote" 
                  subtitle="Quick application, fast response"
                  type="borrower"
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

export default Borrowers;