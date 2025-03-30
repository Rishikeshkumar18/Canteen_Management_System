import React from "react";

const About= () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      {/* About Us Header */}
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
      <p className="text-center text-gray-600 mb-12">
        Our story, mission, and the people behind Canteen
      </p>

      {/* Our Story */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
        <p className="text-gray-600">
          Founded in 2023, Canteen started with a simple mission: to provide delicious, 
          high-quality food that brings people together. What began as a small family 
          business has grown into a beloved establishment serving our community with 
          the same passion and dedication as day one.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-600">
          At Canteen, we believe that good food should be accessible to everyone. 
          We're committed to using locally-sourced ingredients whenever possible, 
          reducing our environmental footprint, and creating a welcoming space for 
          our customers. Every dish we serve is prepared with care, creativity, 
          and a deep respect for culinary traditions.
        </p>
      </div>

      {/* Four Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Quality Ingredients</h4>
          <p className="text-gray-600">
            We source the freshest ingredients from local suppliers, ensuring that 
            every dish not only tastes amazing but also supports our community.
          </p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Passionate Team</h4>
          <p className="text-gray-600">
            Our team of dedicated professionals brings years of culinary expertise 
            and a shared passion for creating memorable dining experiences.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Community Focus</h4>
          <p className="text-gray-600">
            We're proud to be part of this community and regularly participate in 
            local events, fundraisers, and initiatives that give back.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold mb-2">Sustainable Practices</h4>
          <p className="text-gray-600">
            From composting food waste to using eco-friendly packaging, we’re committed 
            to reducing our environmental impact in every way possible.
          </p>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-3">Visit Us</h3>
        <p className="text-gray-600">
          We'd love to welcome you to our restaurant. Stop by, say hello, and experience 
          the Canteen difference for yourself. We're open seven days a week, with extended 
          hours on weekends.
        </p>
      </div>
    </section>
  );
};

export default About;
