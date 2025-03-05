import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionBlog() {
  return (
    <>
      {/* Featured Blog */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              À la une
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-800 mb-4">
              Annonces et communiqués de presse récemments publiés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Affectation des agents & cadres",
                category: "Annonce",
                date: "Decembre 2024",
                link: "#",
                image: "/static/images/gallery-photo-01.jpeg",
              },
              {
                title: "Inauguration du Centre Financier de Kinshasa",
                category: "Presse",
                date: "Janvier 2025",
                link: "#",
                image: "/static/images/gallery-photo-01.jpeg",
              },
              {
                title: "Avis d'appel à candidature DGTCP (Plusieurs postes)",
                category: "Presse",
                date: "Fevrier 2025",
                link: "#",
                image: "/static/images/gallery-photo-01.jpeg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-neutral-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/9] bg-neutral-200 relative">
                  <Image
                    src={item.image}
                    alt="alt"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-neutral-500">{item.date}</div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center font-semibold hover:underline md:text-base mt-6"
                  >
                    <span>Lire plus</span>
                    <ArrowRight className="ml-2 size-4 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
