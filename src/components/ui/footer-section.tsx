import { Button } from "@/components/ui/button";
import { CMS_SERVICES } from "@/constants/cms";
import Link from "next/link";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

// bg-[#112673]

export function FooterSection({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <section className="py-16">
      <div className="w-[90%] md:container mx-auto">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-accent p-2">
                  <img
                    src="/static/images/header-logo.png"
                    alt="placeholder logo"
                    className="size-12 h-full w-full object-contain object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">Sunphenix.com</h3>
              </div>
              <p className="text-base font-medium text-muted-foreground">
                Ideas reborn new
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                <div className="h-fit w-min">
                  <h4 className="mb-6 text-base font-semibold whitespace-nowrap">
                    Services
                  </h4>
                  <ul className="space-y-3 text-base font-medium text-muted-foreground">
                    {CMS_SERVICES.map((e, x) => (
                      <li key={x}>
                        <a
                          href={e.href}
                          className="text-base whitespace-nowrap hover:text-accent-foreground"
                        >
                          {e.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-fit w-min">
                  <h4 className="mb-6 text-base font-semibold whitespace-nowrap">
                    Metiers
                  </h4>
                  <ul className="space-y-3 text-base font-medium text-muted-foreground">
                    <li>
                      <a
                        href="#"
                        className="text-base whitespace-nowrap hover:text-accent-foreground"
                      >
                        Prestations métiers (BPO)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base whitespace-nowrap hover:text-accent-foreground"
                      >
                        Prestations techniques (ITO)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base whitespace-nowrap hover:text-accent-foreground"
                      >
                        Prestations à haute valeur ajoutée (KPO)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full shrink-0 sm:w-fit">
                <div className="mb-6 text-base font-semibold">
                  Ne ratez aucun update
                </div>
                <form className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    data-slot="input"
                    className="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive lg:min-w-72"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3"
                  >
                    Recevoir les updates
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-baseline justify-between gap-8 border-t border-border pt-8 md:flex-row md:gap-16">
            <div className="text-xs text-muted-foreground sm:text-sm">
              © Sunphenix.com 2024
            </div>
            <div className="flex flex-col items-start gap-4 text-xs text-muted-foreground sm:text-sm md:flex-row lg:items-center">
              <a href="/terms" className="hover:text-accent-foreground">
                Conditions d'utilisation
              </a>
              <a href="/privacy" className="hover:text-accent-foreground">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-accent-foreground">
                Cookies
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
