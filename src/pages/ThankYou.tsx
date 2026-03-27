import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const confettiColors = ["hsl(345 30% 64%)", "hsl(350 60% 88%)", "hsl(25 55% 93%)", "hsl(0 30% 75%)"];

const ThankYou = () => {
  const [confetti, setConfetti] = useState<{ id: number; left: number; color: string; delay: number; size: number }[]>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      delay: Math.random() * 2,
      size: Math.random() * 8 + 4,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed pointer-events-none animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="pt-32 pb-24 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-8 animate-fade-in-up">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-body text-sm uppercase tracking-[0.3em] text-primary">Order Confirmed</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Thank You!
            </h1>

            <p className="font-body text-lg text-beauty-text mt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Your order has been successfully placed.
            </p>
            <p className="font-body text-beauty-text mt-2 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Your Glowiee beauty essentials are on the way! ✨
            </p>

            <div className="bg-card rounded-2xl border border-border p-6 mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Order Summary</h3>
              <div className="space-y-2 font-body text-sm text-beauty-text">
                <div className="flex justify-between"><span>Order #</span><span className="text-foreground">GLW-2026-{Math.floor(Math.random() * 9000 + 1000)}</span></div>
                <div className="flex justify-between"><span>Status</span><span className="text-primary font-medium">Processing</span></div>
                <div className="flex justify-between"><span>Estimated Delivery</span><span className="text-foreground">3-5 Business Days</span></div>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300 mt-8 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Continue Shopping <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
