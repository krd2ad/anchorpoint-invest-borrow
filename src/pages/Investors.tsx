import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeadForm from "@/components/ui/lead-form";
import { TrendingUp, Shield, PiggyBank, BookOpen, CheckCircle, ArrowRight, DollarSign, Users } from "lucide-react";
import investorsImage from "@/assets/investors-bg.jpg";
import { useEffect } from "react";

const Investors = () => {
  useEffect(() => {
    document.title = "Secured Real Estate Lending Investments | Anchor Point Lending";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Earn attractive, predictable returns through real estate-backed loans. Invest directly or via a Self-Directed IRA with Anchor Point Lending — by investors, for investors.');
    }
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Solid, asset-backed investments",
      description: "Every investment secured by real estate assets"
    },
    {
      icon: Shield,
      title: "Attractive, predictable returns",
      description: "Consistent income potential from secured loans"
    },
    {
      icon: PiggyBank,
      title: "Passive income potential",
      description: "Regular distributions without active management"
    },
    {
      icon: BookOpen,
      title: "Simple, transparent process",
      description: "Clear terms and straightforward investment structure"
    }
  ];

  const iraSteps = [
    { step: "1", title: "Open a Self-Directed IRA", description: "Open a Self-Directed IRA with a qualified custodian" },
    { step: "2", title: "Direct your IRA funds", description: "Direct your IRA funds into vetted real estate loans" },
    { step: "3", title: "Earn returns", description: "Earn returns that go back into your retirement account — tax-deferred or tax-free" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${investorsImage})` }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Earn Consistent, Secured Returns
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              As an investor with Anchor Point Lending, you're partnering in loans backed by real estate — not just paper promises. We invest alongside you, ensuring alignment in every deal.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Investing
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Download Guide
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
            Our investment opportunities are carefully selected by experienced real estate professionals 
            who understand the market and prioritize investor returns and security.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest With Us?</h2>
            <p className="text-xl text-muted-foreground">Stable returns, transparent process, experienced management</p>
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

      {/* Self-Directed IRA Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Retirement with Real Estate Lending</h2>
              <p className="text-xl text-muted-foreground">
                With a Self-Directed IRA, you can invest your retirement funds in real-estate-secured loans. We'll guide you through the process so you can diversify beyond traditional stocks and bonds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">How It Works:</h3>
                <div className="grid grid-cols-1 gap-6">
                  {iraSteps.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-accent-foreground">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Ready to Get Started?</CardTitle>
                    <p className="text-muted-foreground">
                      Our team will guide you through the self-directed IRA process and help you identify suitable investment opportunities.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>Free consultation with IRA specialists</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>Custodian referrals and guidance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>Investment opportunity matching</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>Ongoing support and education</span>
                      </div>
                    </div>
                    <Button variant="cta" className="w-full mt-6">
                      Schedule Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start earning with secured real estate lending today.</h2>
                <p className="text-xl mb-6 text-primary-foreground/90">
                  Join sophisticated investors who choose real estate-backed investments for stable, passive returns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Asset-backed security</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Attractive, predictable returns</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>IRA and 401(k) eligible</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Professional management</span>
                  </li>
                </ul>
              </div>
              <div>
                <LeadForm 
                  title="Investment Inquiry" 
                  subtitle="Discover investment opportunities"
                  type="investor"
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

export default Investors;