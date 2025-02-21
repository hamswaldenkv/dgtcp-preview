"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowCircleRight, ArrowCircleLeft } from "iconsax-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}
const slides: Slide[] = [
  {
    id: 1,
    title: "Exploring Mars: New Discoveries",
    description:
      "Recent findings from the Perseverance rover reveal ancient waterways on the Red Planet.",
    image: "/static/images/home-slider-01.jpeg",
    category: "Mars Exploration",
  },
  {
    id: 2,
    title: "Webb Telescope's Latest Images",
    description:
      "Stunning new imagery of distant galaxies captured by the James Webb Space Telescope.",
    image: "/static/images/home-slider-02.jpg",
    category: "Deep Space",
  },
  {
    id: 3,
    title: "Europa Mission Update",
    description:
      "Preparation continues for the upcoming mission to Jupiter's icy moon.",
    image: "/static/images/home-slider-03.jpg",
    category: "Solar System",
  },
];

export default function SectionHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };
  return (
    <div className="bg-white">
      <div className="relative w-full h-[60vh] overflow-hidden bg-space-dark">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-20 bg-gradient-to-t from-black/80 to-transparent">
              <div className="container mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-primary rounded-full">
                  {slide.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-appear">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white max-w-2xl animate-appear">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ArrowCircleLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ArrowCircleRight className="w-6 h-6" />
        </button>
      </div>
      <div className="h-1 flex w-full">
        <div className="flex-1 h-full bg-primary" />
        <div className="flex-1 h-full bg-red-500" />
        <div className="flex-1 h-full bg-yellow-500" />
      </div>
    </div>
  );
}
