import serumImg from "@/assets/product-serum.jpg";
import lipstickImg from "@/assets/product-lipstick.jpg";
import moisturizerImg from "@/assets/product-moisturizer.jpg";
import sunscreenImg from "@/assets/product-sunscreen.jpg";
import facemistImg from "@/assets/product-facemist.jpg";
import foundationImg from "@/assets/product-foundation.jpg";
import cleanserImg from "@/assets/product-cleanser.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
  ingredients: string;
  skinType: string;
  howToUse: string;
  concerns: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Glowiee Radiance Serum",
    price: 49.99,
    category: "Face Serums",
    image: serumImg,
    badge: "Best Seller",
    description: "A luxurious vitamin C serum that delivers a burst of radiance to dull, tired skin. Formulated with 15% pure vitamin C and hyaluronic acid for a luminous, youthful glow.",
    benefits: ["Brightens skin tone", "Reduces dark spots", "Boosts collagen production", "Hydrates deeply"],
    ingredients: "Aqua, Ascorbic Acid (Vitamin C) 15%, Sodium Hyaluronate, Ferulic Acid, Vitamin E, Niacinamide, Aloe Barbadensis Leaf Juice, Glycerin",
    skinType: "All Skin Types",
    howToUse: "Apply 3-4 drops to clean, damp skin morning and night. Follow with moisturizer and SPF in the morning.",
    concerns: ["Brightening", "Anti-aging", "Hydration"],
  },
  {
    id: "2",
    name: "Velvet Touch Lipstick",
    price: 24.99,
    category: "Lip Care",
    image: lipstickImg,
    badge: "New Launch",
    description: "A creamy, long-wearing lipstick with a velvety matte finish. Enriched with shea butter and vitamin E to keep lips soft and moisturized all day.",
    benefits: ["Long-lasting wear", "Moisturizing formula", "Rich pigmentation", "Non-drying"],
    ingredients: "Ricinus Communis Seed Oil, Caprylic/Capric Triglyceride, Copernicia Cerifera Wax, Butyrospermum Parkii Butter, Tocopherol",
    skinType: "All Skin Types",
    howToUse: "Apply directly to lips. For a precise application, use a lip liner first. Reapply as needed.",
    concerns: ["Hydration", "Color"],
  },
  {
    id: "3",
    name: "Dew Drop Moisturizer",
    price: 39.99,
    category: "Moisturizers",
    image: moisturizerImg,
    badge: "Best Seller",
    description: "A lightweight gel-cream moisturizer that delivers 72-hour hydration. Infused with rose water and ceramides for a dewy, plump complexion.",
    benefits: ["72-hour hydration", "Lightweight texture", "Strengthens skin barrier", "Dewy finish"],
    ingredients: "Aqua, Rosa Damascena Flower Water, Ceramide NP, Squalane, Glycerin, Hyaluronic Acid, Panthenol, Centella Asiatica Extract",
    skinType: "All Skin Types",
    howToUse: "Apply generously to face and neck after serum, morning and evening. Gently press into skin for better absorption.",
    concerns: ["Hydration", "Glow", "Barrier repair"],
  },
  {
    id: "4",
    name: "Glow Shield Sunscreen",
    price: 34.99,
    category: "Sunscreen",
    image: sunscreenImg,
    description: "A weightless, invisible sunscreen with SPF 50+ PA++++ that leaves a luminous, non-greasy finish. Perfect under makeup or worn alone.",
    benefits: ["SPF 50+ PA++++", "No white cast", "Lightweight formula", "Makeup-friendly"],
    ingredients: "Aqua, Ethylhexyl Methoxycinnamate, Titanium Dioxide, Zinc Oxide, Niacinamide, Centella Asiatica Extract, Tocopherol",
    skinType: "All Skin Types",
    howToUse: "Apply as the last step of your skincare routine, 15 minutes before sun exposure. Reapply every 2 hours.",
    concerns: ["Sun protection", "Brightening"],
  },
  {
    id: "5",
    name: "Rose Petal Face Mist",
    price: 22.99,
    category: "Skincare",
    image: facemistImg,
    badge: "Limited Edition",
    description: "A refreshing facial mist infused with pure Bulgarian rose water and hyaluronic acid. Instantly hydrates, soothes, and sets makeup beautifully.",
    benefits: ["Instant hydration", "Soothes irritation", "Sets makeup", "Refreshes skin"],
    ingredients: "Rosa Damascena Flower Water, Aqua, Sodium Hyaluronate, Aloe Barbadensis Leaf Extract, Glycerin, Panthenol",
    skinType: "All Skin Types",
    howToUse: "Hold 8-10 inches from face and mist evenly. Use anytime throughout the day for a refreshing boost.",
    concerns: ["Hydration", "Soothing"],
  },
  {
    id: "6",
    name: "Silk Finish Foundation",
    price: 42.99,
    category: "Makeup",
    image: foundationImg,
    badge: "New Launch",
    description: "A buildable, medium-to-full coverage foundation with a silky, natural finish. Infused with skincare ingredients for a flawless, skin-like look.",
    benefits: ["Buildable coverage", "Natural finish", "12-hour wear", "Skincare-infused"],
    ingredients: "Aqua, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Niacinamide, Hyaluronic Acid, Tocopherol, Iron Oxides",
    skinType: "All Skin Types",
    howToUse: "Apply with a beauty sponge or brush, blending outward from the center of the face. Build coverage as desired.",
    concerns: ["Coverage", "Glow"],
  },
  {
    id: "7",
    name: "Hydration Boost Cleanser",
    price: 28.99,
    category: "Face Wash",
    image: cleanserImg,
    description: "A gentle, pH-balanced foaming cleanser that removes impurities without stripping the skin. Leaves skin feeling clean, soft, and hydrated.",
    benefits: ["Gentle cleansing", "pH-balanced", "Non-stripping", "Hydrating formula"],
    ingredients: "Aqua, Cocamidopropyl Betaine, Glycerin, Sodium Hyaluronate, Centella Asiatica Extract, Ceramide NP, Tea Tree Oil",
    skinType: "All Skin Types",
    howToUse: "Massage a small amount onto damp skin in circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.",
    concerns: ["Cleansing", "Hydration"],
  },
];

export const categories = ["All", "Face Serums", "Moisturizers", "Lip Care", "Sunscreen", "Skincare", "Makeup", "Face Wash"];
