import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, CheckCircle, Building, MapPin } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Anchor Point Lending | Real Estate Lending Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Founded by active real estate investors, Anchor Point Lending delivers speed, transparency, and results for borrowers and investors. Learn our story.');
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "Do what's right, always."
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description: "Clear terms and honest communication."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Success for borrowers and investors alike."
    }
  ];

  const stats = [
    { number: "$500M+", label: "Loans Funded" },
    { number: "2,500+", label: "Successful Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Investors, Just Like You
            </h1>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Anchor Point Lending was founded by experienced real estate investors who saw a better way to connect capital with opportunity. We've walked in the shoes of both the borrower racing to close a deal and the investor seeking steady, reliable returns.
                  </p>
                  <p>
                    Our mission is simple: provide speed, transparency, and security in every transaction.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="pt-6">
                        <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build your next success together.</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're looking for financing or investment opportunities, 
              we'd love to discuss how we can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;