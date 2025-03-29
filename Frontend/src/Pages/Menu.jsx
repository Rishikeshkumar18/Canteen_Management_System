import React from "react";
import { ShoppingCart, ChevronRight } from "lucide-react";

const Menu = () => {
  const items = [
    {
      id: 1,
      name: "Mediterranean Bowl",
      image: "/cart1.avif",
      description: "Chickpeas, hummus, cucumber, cherry tomatoes, feta cheese, and lemon herb dressing.",
      price: "12.99",
      popular: true,
    },
    {
      id: 2,
      name: "Teriyaki Chicken",
      image: "/cart2.avif",
      description: "Grilled chicken with teriyaki sauce, steamed rice, and broccoli.",
      price: "14.99",
      popular: false,
    },
    {
      id: 3,
      name: "Avocado Toast",
      image: "/cart3.avif",
      description: "Sourdough toast with smashed avocado, poached egg, and red pepper flakes.",
      price: "9.99",
      popular: false,
    },
    {
      id: 4,
      name: "Caesar Salad",
      image: "/cart4.avif",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing.",
      price: "8.99",
      popular: false,
    },
    {
      id: 5,
      name: "Poke Bowl",
      image: "/cart5.avif",
      description: "Diced tuna, sushi rice, avocado, cucumber, edamame, and spicy mayo.",
      price: "15.99",
      popular: true,
    },
    {
      id: 6,
      name: "Falafel Wrap",
      image: "/cart6.avif",
      description: "Homemade falafel, hummus, tabbouleh, and garlic sauce in a whole wheat wrap.",
      price: "10.99",
      popular: false,
    },
  ];

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Menu</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our chef's selection of most popular and delicious meals, freshly prepared with premium ingredients.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">${item.price}</span>

                  {/* Popular Badge */}
                  {item.popular && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">Popular</span>
                  )}
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-4 flex items-center justify-center w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-8">
          <button className="border px-5 py-2 rounded-lg text-lg flex items-center justify-center mx-auto hover:bg-gray-200 transition">
            View Full Menu
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
