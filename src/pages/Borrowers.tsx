import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LeadForm from "@/components/ui/lead-form";
import { Clock, DollarSign, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react";
import borrowersImage from "@/assets/borrowers-bg.jpg";

const Borrowers = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Funding",
      description: "Get approved in 24-48 hours and funded within 5-7 days"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Flexible terms and competitive rates tailored to your project"
    },
    {
      icon: TrendingUp,
      title: "Asset-Based Lending",
      description: "Focused on the property value and deal potential, not just credit scores"
    },
    {
      icon: Shield,
      title: "Experienced Team",
      description: "Real estate investors helping investors with proven expertise"
    }
  ];

  const loanTypes = [
    {
      title: "Bridge Loans",
      description: "Short-term financing to bridge the gap between buying and selling",
      features: ["6-24 month terms", "Up to 80% LTV", "Quick closings", "Interest-only payments"]
    },
    {
      title: "Fix & Flip Loans",
      description: "Financing for property acquisition and renovation costs",
      features: ["Purchase + rehab costs", "Up to 90% ARV", "12-month terms", "Draw schedule available"]
    },
    {
      title: "Commercial Loans",
      description: "Financing for income-producing commercial properties",
      features: ["$500K - $10M+", "Up to 75% LTV", "Competitive rates", "Various property types"]
    }
  ];

  const process = [
    { step: "1", title: "Application", description: "Submit your loan application with property details" },
    { step: "2", title: "Review", description: "Our team reviews and provides preliminary approval within 24 hours" },
    { step: "3", title: "Underwriting", description: "Property evaluation and final loan terms negotiation" },
    { step: "4", title: "Funding", description: "Close and receive funds typically within 5-7 days" }
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
              Fast, Flexible Real Estate Financing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Asset-based lending solutions designed by investors, for investors. Get the capital you need to close deals quickly.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Apply Now
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

      {/* Loan Types */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Products</h2>
            <p className="text-xl text-muted-foreground">Tailored financing solutions for every real estate investment strategy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                  <p className="text-muted-foreground">{loan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {loan.features.map((feature, featureIndex) => (
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

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-xl text-muted-foreground">From application to funding in just a few simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
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