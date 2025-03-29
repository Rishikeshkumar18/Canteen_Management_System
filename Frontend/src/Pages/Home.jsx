import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const timer = setTimeout(() => {
      const animatedElements =
        heroElement.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((el) => {
        el.classList.add("visible");
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30 z-0"></div>

      <div
        className="absolute inset-0 z-[-1] opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80)",
          filter: "blur(5px)",
        }}
      ></div>

      <div className="container-content relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 stagger-children">
            <div className="animate-on-scroll">
              <button className="mb-6 rounded-full bg-secondary/70 backdrop-blur-sm border-primary/10 text-xs px-4 py-2">
                Clean food for busy people
              </button>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-on-scroll">
              <span className="block">Delicious meals.</span>
              <span className="block">Delivered to you.</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 animate-on-scroll">
              Fresh, healthy, and chef-prepared meals delivered to your office
              or campus. No waiting in line.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-on-scroll">
              <Link to="/menu">
                <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg flex items-center">
                  Order Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 animate-on-scroll">
            <div className="relative flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                alt="Healthy meal with fresh ingredients"
                className="rounded-2xl shadow-elevated w-full max-w-md lg:max-w-lg object-cover hover-scale"
                style={{ aspectRatio: "4/3" }}
                loading="eager"
              />

              <div className="absolute -top-6 -left-6 lg:-left-12 w-32 h-32 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 lg:-right-12 w-32 h-32 bg-primary/5 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;