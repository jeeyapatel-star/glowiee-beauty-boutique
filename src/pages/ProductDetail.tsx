import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingBag, Minus, Plus, Star, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "howToUse">("description");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <p className="font-body text-beauty-text">Product not found.</p>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const allRelated = relatedProducts.length < 4
    ? [...relatedProducts, ...products.filter((p) => p.id !== product.id && !relatedProducts.includes(p)).slice(0, 4 - relatedProducts.length)]
    : relatedProducts;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-body text-sm text-beauty-text mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden bg-card aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-6 left-6 bg-primary text-primary-foreground text-xs font-body font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">{product.name}</h1>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-body text-sm text-beauty-text">(128 reviews)</span>
              </div>

              <p className="font-heading text-3xl font-bold text-foreground mt-6">${product.price.toFixed(2)}</p>

              <p className="font-body text-beauty-text leading-relaxed mt-6">{product.description}</p>

              {/* Concerns */}
              <div className="flex flex-wrap gap-2 mt-6">
                {product.concerns.map((c) => (
                  <span key={c} className="px-3 py-1 rounded-full bg-secondary text-sm font-body text-foreground">{c}</span>
                ))}
              </div>

              <p className="font-body text-sm text-beauty-text mt-4">Skin Type: <span className="text-foreground font-medium">{product.skinType}</span></p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-body font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider hover:shadow-beauty-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-10 border-t border-border pt-8">
                <div className="flex gap-6 mb-6">
                  {[
                    { key: "description" as const, label: "Benefits" },
                    { key: "ingredients" as const, label: "Ingredients" },
                    { key: "howToUse" as const, label: "How to Use" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`font-body text-sm uppercase tracking-wider pb-2 transition-colors ${
                        activeTab === tab.key ? "text-primary border-b-2 border-primary" : "text-beauty-text hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                {activeTab === "description" && (
                  <ul className="space-y-2">
                    {product.benefits.map((b) => (
                      <li key={b} className="font-body text-beauty-text flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === "ingredients" && <p className="font-body text-beauty-text text-sm leading-relaxed">{product.ingredients}</p>}
                {activeTab === "howToUse" && <p className="font-body text-beauty-text text-sm leading-relaxed">{product.howToUse}</p>}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-24">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-12">You May Also Love</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {allRelated.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
