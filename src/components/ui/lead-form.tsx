import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  type?: "borrower" | "investor" | "general";
  className?: string;
}

const LeadForm = ({ title = "Get Started Today", subtitle, type = "general", className = "" }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours to discuss your needs.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className={`shadow-card ${className}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          {type === "borrower" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="loanType">Loan Type</Label>
                <Select name="loanType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bridge">Bridge Loan</SelectItem>
                    <SelectItem value="fix-flip">Fix & Flip</SelectItem>
                    <SelectItem value="commercial">Commercial Loan</SelectItem>
                    <SelectItem value="refinance">Refinance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <Select name="loanAmount">
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                    <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-plus">$1M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {type === "investor" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="investmentAmount">Investment Amount</Label>
                <Select name="investmentAmount">
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                    <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                    <SelectItem value="500k-plus">$500K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="investorType">Investor Type</Label>
                <Select name="investorType">
                  <SelectTrigger>
                    <SelectValue placeholder="Select investor type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual</SelectItem>
                    <SelectItem value="ira">Self-Directed IRA</SelectItem>
                    <SelectItem value="entity">Entity/Trust</SelectItem>
                    <SelectItem value="fund">Fund Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your needs</Label>
            <Textarea id="message" name="message" rows={3} placeholder="Describe your project or investment goals..." />
          </div>
          
          <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get Started"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;