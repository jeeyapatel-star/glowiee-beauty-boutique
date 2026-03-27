import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Leaf, Microscope, Star } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-beauty.jpg";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Index = () => {
  const scrollRef = useScrollReveal();

  const featuredProducts = products.filter((p) => p.badge === "Best Seller" || p.badge === "New Launch");
  const categoryList = [
    { name: "Skincare", emoji: "✨" },
    { name: "Makeup", emoji: "💄" },
    { name: "Lip Care", emoji: "💋" },
    { name: "Face Serums", emoji: "💧" },
    { name: "Sunscreen", emoji: "☀️" },
    { name: "Face Wash", emoji: "🫧" },
  ];

  const testimonials = [
    { name: "Sarah M.", text: "Glowiee's Radiance Serum completely transformed my skin. I've never felt more confident!", rating: 5 },
    { name: "Emily R.", text: "The Dew Drop Moisturizer is liquid gold. My skin has never been this hydrated and glowy.", rating: 5 },
    { name: "Jessica L.", text: "Finally found a sunscreen that doesn't leave a white cast. Glow Shield is my holy grail!", rating: 5 },
  ];

  return (
    <div ref={scrollRef} className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Glowiee premium beauty products" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary animate-sparkle hidden lg:block" />
        <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-blush animate-sparkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 right-60 w-2 h-2 rounded-full bg-primary animate-sparkle" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 block animate-fade-in-up">Premium Beauty Essentials</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Glow Naturally<br />with <span className="text-primary italic">Glowiee</span>
            </h1>
            <p className="font-body text-lg text-beauty-text mt-6 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover premium skincare and beauty essentials designed to enhance your natural radiance.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300 hover:scale-105"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal opacity-0">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">Curated For You</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12 reveal opacity-0">
            <Link to="/products" className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal opacity-0">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">Browse By</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 reveal opacity-0">
            {categoryList.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="bg-background rounded-2xl p-6 text-center hover:shadow-beauty-glow transition-all duration-500 hover:-translate-y-2 border border-border"
              >
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <span className="font-heading text-sm font-semibold text-foreground">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Glowiee */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal opacity-0">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Why Choose Glowiee</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal opacity-0">
            {[
              { icon: Shield, title: "Cruelty-Free", desc: "Never tested on animals. Beauty without compromise." },
              { icon: Leaf, title: "Skin-Friendly", desc: "Gentle formulas suitable for even the most sensitive skin." },
              { icon: Sparkles, title: "Premium Ingredients", desc: "Only the finest, ethically sourced ingredients." },
              { icon: Microscope, title: "Dermatologically Tested", desc: "Backed by science, approved by dermatologists." },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-beauty-card transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-beauty-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal opacity-0">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">Love Letters</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal opacity-0">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-beauty-text leading-relaxed italic mb-4">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center reveal opacity-0">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">Stay Glowing</span>
            <h2 className="font-heading text-4xl font-bold text-foreground mt-3 mb-4">Join the Glowiee Family</h2>
            <p className="font-body text-beauty-text mb-8">Subscribe to get exclusive offers, beauty tips, and early access to new launches.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
