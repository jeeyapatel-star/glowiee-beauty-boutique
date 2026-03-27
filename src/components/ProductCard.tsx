import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group product-card-hover bg-card rounded-2xl overflow-hidden border border-border">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-5">
        <span className="font-body text-xs uppercase tracking-widest text-beauty-text">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading text-lg font-semibold mt-1 text-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-heading text-xl font-bold text-foreground">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-beauty-glow transition-all duration-300 hover:scale-110"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
