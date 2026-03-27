import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "", payment: "cod",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/thank-you");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-24 text-center">
          <p className="font-heading text-2xl text-foreground">Your cart is empty. Add some products first!</p>
        </div>
        <Footer />
      </div>
    );
  }

  const inputClass = "w-full px-5 py-3 rounded-xl border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-12">Checkout</h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shipping Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Shipping Details</h2>
              <div className="space-y-4">
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Full Name" className={inputClass} />
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClass} />
                <input name="phone" required value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass} />
                <input name="address" required value={form.address} onChange={handleChange} placeholder="Shipping Address" className={inputClass} />
                <div className="grid grid-cols-3 gap-4">
                  <input name="city" required value={form.city} onChange={handleChange} placeholder="City" className={inputClass} />
                  <input name="state" required value={form.state} onChange={handleChange} placeholder="State" className={inputClass} />
                  <input name="pincode" required value={form.pincode} onChange={handleChange} placeholder="Pincode" className={inputClass} />
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-foreground mt-8">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { value: "cod", label: "Cash on Delivery" },
                  { value: "upi", label: "UPI" },
                  { value: "card", label: "Credit / Debit Card" },
                ].map((opt) => (
                  <label key={opt.value} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${form.payment === opt.value ? "border-primary bg-secondary" : "border-border"}`}>
                    <input type="radio" name="payment" value={opt.value} checked={form.payment === opt.value} onChange={handleChange} className="accent-primary" />
                    <span className="font-body text-sm text-foreground">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-card p-8 rounded-2xl border border-border h-fit sticky top-28">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-14 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-body text-sm font-medium text-foreground">{item.product.name}</p>
                      <p className="font-body text-xs text-beauty-text">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-body text-sm font-semibold text-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 space-y-2 font-body text-sm">
                <div className="flex justify-between text-beauty-text"><span>Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between text-beauty-text"><span>Shipping</span><span>Free</span></div>
                <div className="border-t border-border pt-3 flex justify-between font-heading font-bold text-xl text-foreground">
                  <span>Total</span><span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-primary text-primary-foreground py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
