import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Glowiee</h3>
          <p className="font-body text-beauty-text text-sm leading-relaxed">
            Premium skincare and beauty essentials designed to enhance your natural radiance.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="font-body text-sm text-beauty-text hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="font-body text-sm text-beauty-text hover:text-primary transition-colors">Shop</Link>
            <Link to="/cart" className="font-body text-sm text-beauty-text hover:text-primary transition-colors">Cart</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Our Promise</h4>
          <div className="flex flex-col gap-2 font-body text-sm text-beauty-text">
            <span>🐰 Cruelty-Free</span>
            <span>🌿 Skin-Friendly</span>
            <span>✨ Premium Ingredients</span>
            <span>🔬 Dermatologically Tested</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <p className="font-body text-sm text-beauty-text mt-4">contact@glowiee.com</p>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="font-body text-sm text-beauty-text">© 2026 Glowiee. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
