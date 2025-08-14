import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, CheckCircle, Building, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "We believe in clear communication and honest dealings in every transaction"
    },
    {
      icon: TrendingUp,
      title: "Performance",
      description: "Focused on delivering consistent returns and successful outcomes"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships based on mutual success and trust"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to maintaining the highest standards in everything we do"
    }
  ];

  const stats = [
    { number: "$500M+", label: "Loans Funded" },
    { number: "2,500+", label: "Successful Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const teamMembers = [
    {
      name: "Michael Anderson",
      role: "Founder & CEO",
      description: "25+ years in real estate investment and lending. Former investment banker with expertise in commercial real estate financing."
    },
    {
      name: "Sarah Chen",
      role: "Chief Investment Officer",
      description: "Real estate investor and former asset manager. Specializes in market analysis and investment strategy development."
    },
    {
      name: "David Martinez",
      role: "Head of Lending",
      description: "20+ years in commercial lending and underwriting. Expert in asset-based lending and risk assessment."
    },
    {
      name: "Jennifer Walsh",
      role: "Director of Investor Relations",
      description: "Former wealth manager with extensive experience in retirement planning and alternative investments."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Anchor Point Lending
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              By Investors, For Investors. We understand real estate because we live it every day.
            </p>
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
                    Anchor Point Lending was founded in 2009 by a group of experienced real estate investors who 
                    understood the challenges of finding reliable, fast financing for real estate investments. 
                    Having been on both sides of the equation—as borrowers seeking capital and as investors 
                    looking for stable returns—we knew there had to be a better way.
                  </p>
                  <p>
                    Our "By Investors, For Investors" philosophy isn't just a tagline—it's how we operate every day. 
                    We understand the urgency of real estate opportunities, the importance of flexible terms, 
                    and the need for transparent communication throughout the process.
                  </p>
                  <p>
                    Today, we've funded over $500 million in real estate projects and helped thousands of 
                    investors achieve their financial goals through our lending and investment programs.
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

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide fast, flexible, and transparent real estate financing solutions while 
                    offering investors secure, asset-backed investment opportunities that generate 
                    consistent returns.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading platform connecting real estate investors with capital, 
                    creating a seamless ecosystem where borrowers and investors both achieve 
                    their financial objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Team */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Experienced professionals with deep real estate expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-accent font-medium">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Anchor Point Lending?</h2>
              <p className="text-xl text-muted-foreground">Experience the difference of working with real estate professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Real Estate Expertise</h4>
                    <p className="text-sm text-muted-foreground">Our team consists of active real estate investors who understand market dynamics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Decision Making</h4>
                    <p className="text-sm text-muted-foreground">Quick approvals and funding to help you close deals on time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Terms</h4>
                    <p className="text-sm text-muted-foreground">Customized loan structures to fit your specific project needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Process</h4>
                    <p className="text-sm text-muted-foreground">Clear communication and honest dealings throughout every transaction</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Nationwide Coverage</h4>
                    <p className="text-sm text-muted-foreground">Lending capabilities across multiple states and markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Strong Track Record</h4>
                    <p className="text-sm text-muted-foreground">15+ years of successful lending and investment management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Investor-Focused</h4>
                    <p className="text-sm text-muted-foreground">Opportunities designed specifically for sophisticated real estate investors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">Continued relationship and support beyond the initial transaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="w-6 h-6 text-accent" />
                    <span>Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <div className="font-medium">New York Headquarters</div>
                        <div className="text-sm text-muted-foreground">
                          123 Financial District<br />
                          New York, NY 10004
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Located in the heart of Manhattan's Financial District, our team is positioned 
                      to serve clients nationwide while maintaining close relationships with local markets.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ready to Work Together?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Whether you're looking for financing or investment opportunities, 
                    we'd love to discuss how we can help you achieve your real estate goals.
                  </p>
                  <div className="space-y-3">
                    <Button variant="cta" className="w-full">
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" className="w-full">
                      View Our Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;