
import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  salePrice?: number;
  href: string;
}

const ProductCard = ({ 
  image, 
  title, 
  rating, 
  reviews, 
  originalPrice, 
  salePrice, 
  href 
}: ProductCardProps) => {
  return (
    <a href={href} className="flex flex-col group">
      <div className="mb-3 aspect-square bg-gray-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="flex mb-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">({reviews})</span>
      </div>
      <h3 className="text-sm font-medium mb-1 line-clamp-2 group-hover:text-scandi-red transition-colors">
        {title}
      </h3>
      <div className="mt-auto">
        {salePrice ? (
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">US${salePrice.toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through">US${originalPrice.toFixed(2)}</span>
          </div>
        ) : (
          <span className="text-lg font-bold">US${originalPrice.toFixed(2)}</span>
        )}
      </div>
    </a>
  );
};

const BestSellers = () => {
  const products = [
    {
      image: "https://placehold.co/300x300?text=Gaming+Console",
      title: "Digital Console XBOX On",
      rating: 5,
      reviews: 5,
      originalPrice: 599.99,
      salePrice: 541.88,
      href: "/product/xbox-console"
    },
    {
      image: "https://placehold.co/300x300?text=Smartphone",
      title: "Huawei Samsung SM-P610",
      rating: 5,
      reviews: 3,
      originalPrice: 399.99,
      salePrice: 374.98,
      href: "/product/samsung-sm"
    },
    {
      image: "https://placehold.co/300x300?text=iPad+Pro",
      title: "Tablet iPad Pro 2020 11",
      rating: 4,
      reviews: 4,
      originalPrice: 1499.99,
      salePrice: 1395.31,
      href: "/product/ipad-pro"
    },
    {
      image: "https://placehold.co/300x300?text=Headphones",
      title: "Overhead Headphones A",
      rating: 5,
      reviews: 3,
      originalPrice: 299.99,
      salePrice: 243.82,
      href: "/product/headphones"
    },
    {
      image: "https://placehold.co/300x300?text=Huawei+Phone",
      title: "Huawei Y9 Prime 2019 E",
      rating: 5,
      reviews: 6,
      originalPrice: 349.99,
      salePrice: 324.83,
      href: "/product/huawei-y9"
    },
    {
      image: "https://placehold.co/300x300?text=Keyboard",
      title: "The Keyboards Tarius LR",
      rating: 5,
      reviews: 3,
      originalPrice: 299.99,
      salePrice: 270.92,
      href: "/product/keyboard"
    },
    {
      image: "https://placehold.co/300x300?text=Huawei+Mate",
      title: "Huawei Mate 20 128Gb T",
      rating: 5,
      reviews: 6,
      originalPrice: 399.99,
      salePrice: 379.29,
      href: "/product/mate-20"
    },
    {
      image: "https://placehold.co/300x300?text=MacBook",
      title: "Notebook Apple MacBook",
      rating: 5,
      reviews: 3,
      originalPrice: 1499.99,
      salePrice: 1327.30,
      href: "/product/macbook"
    },
    {
      image: "https://placehold.co/300x300?text=MacBook+Pro",
      title: "Notebook Apple MacBook Pro",
      rating: 5,
      reviews: 4,
      originalPrice: 1799.99,
      salePrice: 1625.60,
      href: "/product/macbook-pro"
    },
    {
      image: "https://placehold.co/300x300?text=Headphones",
      title: "Overhead Headphones J",
      rating: 5,
      reviews: 3,
      originalPrice: 249.99,
      salePrice: 189.64,
      href: "/product/headphones-j"
    },
    {
      image: "https://placehold.co/300x300?text=iMac",
      title: "Desktop Apple iMac 21.5",
      rating: 5,
      reviews: 7,
      originalPrice: 1999.99,
      salePrice: 1853.19,
      href: "/product/imac"
    },
    {
      image: "https://placehold.co/300x300?text=Lenovo",
      title: "Desktop 23 Lenovo IdeaC",
      rating: 5,
      reviews: 5,
      originalPrice: 999.99,
      salePrice: 961.81,
      href: "/product/lenovo"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6">Best Sellers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.slice(0, 12).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
            href={product.href}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
