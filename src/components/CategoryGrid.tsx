
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  image: string;
  title: string;
  href: string;
}

const CategoryCard = ({ image, title, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="block bg-gray-100 hover:opacity-90 transition-opacity">
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
          {title}
        </div>
      </div>
    </Link>
  );
};

const CategoryGrid = () => {
  const categories = [
    {
      image: "https://placehold.co/300x300?text=Smartphones",
      title: "SMARTPHONES & GADGETS",
      href: "/category/smartphones"
    },
    {
      image: "https://placehold.co/300x300?text=Laptops",
      title: "LAPTOPS & COMPUTERS",
      href: "/category/computers"
    },
    {
      image: "https://placehold.co/300x300?text=Gaming+PC",
      title: "GAMING COMPUTERS",
      href: "/category/gaming"
    },
    {
      image: "https://placehold.co/300x300?text=QLED+TV",
      title: "TV & ENTERTAINMENT",
      href: "/category/tv"
    },
    {
      image: "https://placehold.co/300x300?text=Camera",
      title: "PHOTO & VIDEO",
      href: "/category/photo"
    },
    {
      image: "https://placehold.co/300x300?text=Appliances",
      title: "HOUSEHOLD APPLIANCES",
      href: "/category/household"
    },
    {
      image: "https://placehold.co/300x300?text=Kitchen",
      title: "KITCHEN APPLIANCES",
      href: "/category/kitchen"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            href={category.href}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
