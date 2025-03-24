import React from "react";

export default function SectionCTA() {
  return (
    <section className="py-12">
      <div className="max-w-full overflow-hidden border-y border-border bg-accent pt-10 md:pt-16 lg:pt-20">
        <div className="relative w-[90%] md:container mx-auto flex flex-col md:flex-row md:space-x-12">
          <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
            <h3 className="mb-3 font-semibold md:mb-4 text-4xl md:text-5xl lg:mb-6">
              Un projet en tête ?
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Vous avez un projet et cherchez une équipe capable de le mettre
              sur les rails ?<br />
              C'est parfait ! Venez en discuter avec nous autour d'un café.
            </p>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Contactez-nous
            </button>
          </div>
          <div className="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
            <div className="relative aspect-[8/5] h-full min-h-[16rem] w-full">
              <div className="absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl bg-background shadow-lg shadow-foreground/20 md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]" />
              <div className="absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl bg-background shadow-xl shadow-foreground/20 md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]" />
              <div className="absolute top-0 right-0 z-40 flex aspect-[3/5] w-3/5 items-center justify-center overflow-clip rounded-3xl bg-background shadow-2xl shadow-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
