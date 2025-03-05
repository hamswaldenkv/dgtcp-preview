"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}
const slides: Slide[] = [
  {
    id: 1,
    title: "Affectation des agents & cadres",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-01.jpeg",
    category: "Annonces",
    url: "#",
  },
  {
    id: 2,
    title: "Inauguration du Centre Financier de Kinshasa",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-02.jpg",
    category: "Annonces",
    url: "#",
  },
  {
    id: 3,
    title: "Avis d'appel à candidature DGTCP (Plusieurs postes)",
    description:
      "Mise en œuvre opérationnelle de la politique budgétaire en termes d’exécution des dépenses et de suivi des recettes perçues par les administrations financières",
    image: "/static/images/home-slider-03.jpg",
    category: "Communiqué de presse",
    url: "#",
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

export default function SectionHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, AUTO_SLIDE_INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="bg-white">
      <div className="relative h-[50vh] overflow-hidden bg-space-dark">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            {/** 
            <div className="absolute inset-0 bg-black/40 z-10" />
             */}
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-20">
              <div className="container mx-auto bg-black/25 p-10 flex flex-col items-center">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-primary rounded-full text-center">
                  {slide.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-appear text-center">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white max-w-2xl animate-appear text-center hidden">
                  {slide.description}
                </p>

                <div className="mt-6 flex items-center space-x-2 md:mt-8">
                  <Link
                    href={slide.url}
                    className="text-white inline-flex items-center font-semibold hover:underline md:text-base"
                  >
                    <span>Voir plus</span>
                    <ArrowRight className="ml-2 size-4 transition-transform" />
                  </Link>
                </div>
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
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6" />
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
