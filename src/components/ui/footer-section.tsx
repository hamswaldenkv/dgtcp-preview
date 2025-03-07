import { Button } from "@/components/ui/button";
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
    <footer className="bg-white w-full">
      <div className="md:max-w-7xl mx-auto py-24 flex flex-col md:flex-row space-y-5 md:space-y-0">
        <div className="flex justify-center md:justify-start">
          <img
            src="/static/images/logo-main-nav.jpeg"
            className="h-28"
            alt="DCGTP"
          />
        </div>
        <div className="flex-1 flex md:border-l md:border-gray-300 md:mx-10 md:px-16 px-10">
          <div className="flex-1">
            <h1 className="font-bold font-hkgrotesk">Accès Rapide</h1>
            <ul className="space-y-2 mt-5">
              <li>
                <Link className="hover:text-primary2" href="/about/history">
                  <span className="text-sm font-medium">A propos</span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary2"
                  href="/about/leaderboard-map"
                >
                  <span className="text-sm font-medium">Organisation</span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary2"
                  href="/actualites/annonces"
                >
                  <span className="text-sm font-medium">Annonces</span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary2" href="/actualites/presse">
                  <span className="text-sm font-medium">
                    Communiqué de presse
                  </span>
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary2" href="/contact">
                  <span className="text-sm font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="font-bold font-hkgrotesk">Liens Utiles</h1>
            <ul className="space-y-2 mt-5">
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://presidence.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Presidence</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://www.primature.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Primature</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://senat.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Sénat</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://finances.gouv.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">
                    Ministère des finances
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://republique.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">
                    Portail de la République
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://www.dgi.gouv.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">
                    Direction Générale des Impôts
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://fonctionpublique.gouv.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Fonction publique</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://fonctionpublique.gouv.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Fonction publique</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary2"
                  href="https://budget.gouv.cd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm font-medium">Budget</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-center md:justify-start hidden xl:inline">
          <h1 className="font-bold font-hkgrotesk">Notre adresse</h1>
          <div>
            <span className="text-sm">14, Avenue Sergent Moke</span>
          </div>
          <div>
            <span className="text-sm">Concession Safricas</span>
          </div>
          <div>
            <span className="text-sm">Kinshasa - Gombe</span>
          </div>
          <div className="py-2">
            <a
              href="mailto:secretariat-dg@dgtcp.cd"
              className="text-primary2 border border-primary2 hover:bg-primary2 hover:text-white px-2 py-2 flex items-center justify-center space-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-base">secretariat-dg@dgtcp.cd</span>
            </a>
          </div>
          <div className="py-2">
            <a
              href="tel:243819387049"
              className="text-primary2 border border-primary2 hover:bg-primary2 hover:text-white px-2 py-2 flex items-center justify-center space-x-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-base">+243 819 387 049</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900/5 py-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
          <a href="/privacy-policy">Termes de confidentialité</a>
          <div className="h-4 w-px bg-white" />
          <a href="/termsofuse">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
}
