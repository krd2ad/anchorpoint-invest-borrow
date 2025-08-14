import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Anchor Point Lending</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              By Investors, For Investors. Professional real estate lending and investment solutions backed by expertise and transparency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/borrowers" className="text-primary-foreground/80 hover:text-accent transition-colors">For Borrowers</Link></li>
              <li><Link to="/investors" className="text-primary-foreground/80 hover:text-accent transition-colors">For Investors</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary-foreground/80">Bridge Loans</span></li>
              <li><span className="text-primary-foreground/80">Fix & Flip Financing</span></li>
              <li><span className="text-primary-foreground/80">Commercial Loans</span></li>
              <li><span className="text-primary-foreground/80">Investment Opportunities</span></li>
              <li><span className="text-primary-foreground/80">Self-Directed IRA</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:(555) 123-4567" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:info@anchorpointlending.com" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@anchorpointlending.com</span>
              </a>
              <div className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Financial District<br />New York, NY 10004</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Anchor Point Lending. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;