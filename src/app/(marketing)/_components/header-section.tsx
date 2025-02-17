"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img
                src="https://www.dgtcp.cd/wp-content/themes/site-theme/images/logo-finances.png"
                className="h-14"
                alt="DCGTP"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
              id="headlessui-popover-button-2"
              type="button"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="/"
              className="uppercase text-sm font-semibold text-black hover:text-blue-500 py-6 border-b-2 border-transparent"
            >
              <span>Accueil</span>
            </a>
            <a
              href="/organisation"
              className="uppercase text-sm font-semibold text-black hover:text-blue-500 py-6 border-b-2 border-transparent"
            >
              <span>Organisation</span>
            </a>
            <a
              href="/services"
              className="uppercase text-sm font-semibold text-black hover:text-blue-500 py-6 border-b-2 border-transparent"
            >
              <span>Services</span>
            </a>
            <a
              href="/actualites"
              className="uppercase text-sm font-semibold text-black hover:text-blue-500 py-6 border-b-2 border-transparent"
            >
              <span>Actualités</span>
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/#"
              className="whitespace-nowrap items-center justify-center space-x-3 px-6 py-2 text-primary hidden"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-uppercase text-sm font-bold">
                Recherche
              </span>
            </a>
            <a
              href="mailto:secretariat-dg@dgtcp.cd"
              className="whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-1 border-primary rounded-sm text-sm font-bold text-primary bg-white"
            >
              Nous écrire
            </a>
            <ul className="ml-10 flex space-x-2">
              {" "}
              <li className="lang-item lang-item-4 lang-item-fr current-lang lang-item-first">
                <a
                  lang="fr-FR"
                  hrefLang="fr-FR"
                  href="https://www.dgtcp.cd/organisation/"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAbFBMVEVzldTg4ODS0tLxDwDtAwDjAADD0uz39/fy8vL3k4nzgna4yOixwuXu7u7s6+zn5+fyd2rvcGPtZljYAABrjNCpvOHrWkxegsqfs93NAADpUUFRd8THAABBa7wnVbERRKa8vLyxsLCoqKigoKClCvcsAAAAXklEQVR4AS3JxUEAQQAEwZo13Mk/R9w5/7UERJCIGIgj5qfRJZEpPyNfCgJTjMR1eRRnJiExFJz5Mf1PokWr/UztIjRGQ3V486u0HO55m634U6dMcf0RNPfkVCTvKjO16xHA8miowAAAAABJRU5ErkJggg=="
                    alt="Français"
                    width={16}
                    height={11}
                    style={{ width: "16px", height: "11px" }}
                  />
                </a>
              </li>
              <li className="lang-item lang-item-7 lang-item-en">
                <a
                  lang="en-US"
                  hrefLang="en-US"
                  href="https://www.dgtcp.cd/en/organization-en/"
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII="
                    alt="English"
                    width={16}
                    height={11}
                    style={{ width: "16px", height: "11px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
