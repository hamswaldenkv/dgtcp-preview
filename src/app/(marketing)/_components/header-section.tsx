"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const menuItems = [
  {
    title: "Accueil",
    href: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "L'organisation",
    href: "/about",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenu: [
      {
        title: "Création & Histoire",
        href: "/about/history",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Missions successives",
        href: "/about/missions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Organigramme",
        href: "/about/leaderboard-map",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Textes référentiels",
        href: "/about/legal-texts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Attributions",
        href: "/about/attributions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Equipe dirigeante",
        href: "/about/leadership",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    title: "Publications",
    href: "/actualites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenu: [
      {
        title: "Annonces",
        href: "/actualites/annonces",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Communiqué de presse",
        href: "/actualites/presse",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Rapports d'activité",
        href: "/actualites/rapports",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    title: "Contacts",
    href: "/contact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

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
              {/** <img
                src="https://www.dgtcp.cd/wp-content/themes/site-theme/images/logo-finances.png"
                className="h-20"
                alt="DCGTP"
              /> */}
              <img
                src="/static/images/logo-main-nav.jpeg"
                className="h-20"
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
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.subMenu ? (
                    <>
                      <NavigationMenuTrigger>
                        <span className="font-bold uppercase">
                          {item.title}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[400px] md:w-[500px] lg:w-[600px] gap-5 p-4">
                          <div className="w-1/3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md relative overflow-hidden"
                                href="/"
                              >
                                <Image
                                  src="/static/images/bg-cover-01.jpg"
                                  alt="alt"
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </a>
                            </NavigationMenuLink>
                          </div>
                          <div className="w-2/3">
                            <ul className="grid gap-3 md:grid-cols-2">
                              {item.subMenu.map((subItem, x) => (
                                <ListItem
                                  key={x}
                                  href={subItem.href}
                                  title={subItem.title}
                                >
                                  {subItem.description}
                                </ListItem>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <span className="font-bold uppercase">
                          {item.title}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
                <a lang="fr-FR" hrefLang="fr-FR" href="https://www.dgtcp.cd/">
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
                  href="https://www.dgtcp.cd/en/"
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
