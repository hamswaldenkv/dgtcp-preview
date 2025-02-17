import React from "react";

export default function SectionResearch() {
  return (
    <>
      {/* Featured Research */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              À la une
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-800 mb-4">
              Dernières publications
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              EDécouvrez nos derniers articles de recherche, notes d’orientation
              et analyses sur les questions clés de politique numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation in Public Sector",
                category: "Policy Brief",
                date: "March 2024",
              },
              {
                title: "AI Governance Framework",
                category: "Research Paper",
                date: "February 2024",
              },
              {
                title: "Cybersecurity Policy Review",
                category: "Analysis",
                date: "January 2024",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-neutral-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/9] bg-neutral-200"></div>
                <div className="p-6">
                  <div className="text-sm text-primary mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-neutral-500">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
