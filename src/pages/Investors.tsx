import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeadForm from "@/components/ui/lead-form";
import { TrendingUp, Shield, PiggyBank, BookOpen, CheckCircle, ArrowRight, DollarSign, Users } from "lucide-react";
import investorsImage from "@/assets/investors-bg.jpg";

const Investors = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Attractive Returns",
      description: "Target returns of 8-12% annually, secured by real estate"
    },
    {
      icon: Shield,
      title: "Asset-Backed Security",
      description: "All investments secured by physical real estate assets"
    },
    {
      icon: PiggyBank,
      title: "Passive Income",
      description: "Regular distributions without active property management"
    },
    {
      icon: BookOpen,
      title: "IRA Eligible",
      description: "Perfect for self-directed IRAs and retirement planning"
    }
  ];

  const investmentTypes = [
    {
      title: "First Trust Deeds",
      description: "Senior position loans secured by real estate",
      features: ["8-12% target returns", "6-24 month terms", "First lien position", "Loan-to-value ratios up to 75%"],
      minInvestment: "$50,000"
    },
    {
      title: "Bridge Loan Participations",
      description: "Participate in our bridge lending program",
      features: ["9-14% target returns", "Diversified portfolio", "Professional management", "Quarterly distributions"],
      minInvestment: "$100,000"
    },
    {
      title: "Fix & Flip Partnerships",
      description: "Co-invest in profitable fix and flip projects",
      features: ["15-25% target returns", "Active project oversight", "Proven track record", "6-12 month terms"],
      minInvestment: "$25,000"
    }
  ];

  const iraSteps = [
    { step: "1", title: "Choose a Custodian", description: "Select a self-directed IRA custodian that allows real estate investments" },
    { step: "2", title: "Fund Your Account", description: "Transfer or rollover funds from your existing retirement accounts" },
    { step: "3", title: "Select Investments", description: "Choose from our available real estate investment opportunities" },
    { step: "4", title: "Direct Your Custodian", description: "Instruct your custodian to make the investment on behalf of your IRA" }
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
              Invest in Real Estate Secured Returns
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Generate passive income with asset-backed investments. Perfect for self-directed IRAs and portfolio diversification.
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

      {/* Investment Opportunities */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-xl text-muted-foreground">Diversified real estate investment options for every investor</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTypes.map((investment, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow relative">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{investment.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Min. Investment</div>
                      <div className="font-semibold text-accent">{investment.minInvestment}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{investment.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {investment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Directed IRA Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Self-Directed IRA Guide</h2>
                <p className="text-xl text-muted-foreground">Maximize your retirement savings with real estate investments</p>
              </div>
              
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="getting-started">Get Started</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="w-6 h-6 text-accent" />
                      <span>What is a Self-Directed IRA?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-muted-foreground mb-4">
                      A Self-Directed IRA allows you to invest your retirement funds in alternative assets like real estate, 
                      providing greater control and potentially higher returns than traditional retirement accounts.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold">Traditional IRA vs Self-Directed IRA</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>Broader investment options</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>Real estate investments allowed</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>Same tax advantages</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span>Greater control over investments</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold">Eligible Account Types</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Traditional IRA</li>
                          <li>• Roth IRA</li>
                          <li>• SEP-IRA</li>
                          <li>• Simple IRA</li>
                          <li>• 401(k) Rollover</li>
                          <li>• Solo 401(k)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <DollarSign className="w-6 h-6 text-accent" />
                        <span>Financial Benefits</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Tax-Deferred Growth</div>
                            <div className="text-sm text-muted-foreground">All returns grow tax-deferred until withdrawal</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Higher Return Potential</div>
                            <div className="text-sm text-muted-foreground">Real estate often outperforms traditional investments</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Portfolio Diversification</div>
                            <div className="text-sm text-muted-foreground">Reduce risk through asset class diversification</div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Users className="w-6 h-6 text-accent" />
                        <span>Investment Control</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Direct Investment Control</div>
                            <div className="text-sm text-muted-foreground">Choose specific properties and terms</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Transparent Investments</div>
                            <div className="text-sm text-muted-foreground">Know exactly where your money is invested</div>
                          </div>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                          <div>
                            <div className="font-medium">Professional Management</div>
                            <div className="text-sm text-muted-foreground">Expert oversight without daily management</div>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {iraSteps.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-accent-foreground">{item.step}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Important Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">IRA Rules to Remember</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Cannot use IRA-owned property personally</li>
                          <li>• All income and expenses flow through the IRA</li>
                          <li>• Cannot sell to or buy from disqualified persons</li>
                          <li>• Must use IRA funds for all property expenses</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Custodian Requirements</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Must be IRS-approved custodian</li>
                          <li>• Custodian holds title to investments</li>
                          <li>• You direct the investment decisions</li>
                          <li>• Annual custodial fees typically apply</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="getting-started">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  <div>
                    <LeadForm 
                      title="IRA Investment Inquiry" 
                      subtitle="Get personalized guidance for your retirement investments"
                      type="investor"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Investing Today</h2>
                <p className="text-xl mb-6 text-primary-foreground/90">
                  Join sophisticated investors who choose real estate-backed investments for stable, passive returns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Target returns of 8-15% annually</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Asset-backed security</span>
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