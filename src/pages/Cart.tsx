import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-12">Your Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <p className="font-heading text-2xl text-foreground mb-2">Your cart is empty</p>
              <p className="font-body text-beauty-text mb-8">Looks like you haven't added any beauty essentials yet.</p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-6 p-6 bg-card rounded-2xl border border-border">
                    <Link to={`/product/${item.product.id}`} className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.product.id}`} className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="font-body text-sm text-beauty-text mt-1">{item.product.category}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-full overflow-hidden">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-body text-sm font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-heading font-bold text-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-beauty-text hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-card p-8 rounded-2xl border border-border h-fit sticky top-28">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Order Summary</h3>
                <div className="space-y-3 font-body text-sm">
                  <div className="flex justify-between text-beauty-text">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-beauty-text">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-heading font-bold text-lg text-foreground">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
