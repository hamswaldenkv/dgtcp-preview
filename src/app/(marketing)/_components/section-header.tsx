"use client";

import Link from "next/link";
import Image from "next/image";
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
import { ArrowSquareRight, Call, HambergerMenu } from "iconsax-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const menuItems = [
  {
    title: "Accueil",
    href: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenuCover: "/static/images/bg-cover-01.jpg",
  },
  {
    title: "L'organisation",
    href: "/about",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenuCover: "/static/images/bg-cover-01.jpg",
    subMenu: [
      {
        title: "Présentation",
        href: "/about/history",
        description: "Decouvrez l'historique de la DGTCP.",
      },
      {
        title: "Attributions",
        href: "/about/attributions",
        description: "Decouvrez les attributions de la DGTCP.",
      },
      {
        title: "Missions",
        href: "/about/missions",
        description: "Decouvrez les missions de la DGTCP.",
      },
      {
        title: "Reformes",
        href: "/about/reformes",
        description: "Decouvrez les reformes de la DGTCP.",
      },
      {
        title: "Textes référentiels",
        href: "/about/legal-texts",
        description: "Decouvrez les textes référentiels de la DGTCP.",
      },
      {
        title: "Organigramme",
        href: "/about/leaderboard-map",
        description: "Decouvrez l'organigramme de la DGTCP.",
      },
      {
        title: "Equipe dirigeante",
        href: "/about/leadership",
        description: "Decouvrez l'equipe dirigeante de la DGTCP.",
      },
    ],
  },
  {
    title: "Publications",
    href: "/actualites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenuCover: "/static/images/home-slider-01.jpeg",
    subMenu: [
      {
        title: "Annonces",
        href: "/actualites/annonces",
        description: "Decouvrez les annonces de la DGTCP.",
      },
      {
        title: "Communiqué de presse",
        href: "/actualites/presse",
        description: "Decouvrez les communiques de presse de la DGTCP.",
      },
      {
        title: "Rapports d'activité",
        href: "/actualites/rapports",
        description: "Decouvrez les rapports d'activité de la DGTCP.",
      },
      {
        title: "Evénements",
        href: "/actualites/events",
        description: "Decouvrez les événements de la DGTCP.",
      },
    ],
  },
  {
    title: "Partenaires",
    href: "/partenaires",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenuCover: "/static/images/about-office-03.webp",
    subMenu: [
      {
        title: "DGDP",
        href: "/partenaires/dgdp",
        description: "Direction générale de la dette publique",
      },
      {
        title: "DGDA",
        href: "/partenaires/dgda",
        description: "Direction générale des douanes et accises",
      },
      {
        title: "DGRAD",
        href: "/partenaires/dgrad",
        description: "La Direction Générale des Recettes Administratives",
      },
      {
        title: "DGI",
        href: "/partenaires/dgi",
        description: "Direction Général des Impôts",
      },
      {
        title: "COREF",
        href: "/partenaires/coref",
        description:
          "Comité d'orientation de la réforme des finances publiques.",
      },
      {
        title: "CTR",
        href: "/partenaires/ctr",
        description: "Comité Technique de suivi et évaluation des Réformes",
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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative bg-white border-b">
        <div className="flex items-center justify-end border-b p-5 gap-5">
          <a
            href="tel:243819387049"
            className="text-black inline-flex items-center font-semibold hover:underline md:text-sm"
          >
            <Call className="mr-2 size-4 transition-transform" />
            <span>Appelez le secrétariat</span>
          </a>

          <ul className="flex space-x-2">
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
              <a lang="en-US" hrefLang="en-US" href="https://www.dgtcp.cd/en/">
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

        <div className="px-4 sm:px-6 hidden md:block">
          <div className="flex justify-between items-center md:justify-start md:space-x-10 py-1">
            <div className="flex justify-start">
              <a href="/">
                <img
                  src="/static/images/logo-main-nav.jpeg"
                  className="h-20"
                  alt="DCGTP"
                />
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="z-[9999] flex-1">
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
                                      src={item.subMenuCover}
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
            </div>

            <div className="py-5 border-b flex justify-center">
              <a
                target="_blank"
                href="https://finances.gouv.cd/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.dgtcp.cd/wp-content/themes/site-theme/images/logo-finances.png"
                  className="h-20"
                  alt="Ministère des finances"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:hidden">
          <div className="flex justify-between items-center md:justify-start md:space-x-10 py-2">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setSheetOpen(true)}
            >
              <HambergerMenu className="size-8" />
            </Button>

            <div className="flex gap-0 justify-start">
              <a href="/">
                <img
                  src="/static/images/logo-main-nav.jpeg"
                  className="h-12"
                  alt="DCGTP"
                />
              </a>

              <a
                target="_blank"
                href="https://finances.gouv.cd/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.dgtcp.cd/wp-content/themes/site-theme/images/logo-finances.png"
                  className="h-12"
                  alt="Ministère des finances"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <Separator className="my-4" />

          <div className="space-y-1">
            <Accordion type="single" collapsible>
              {menuItems.map((item, x) => (
                <AccordionItem key={x} value={`item-${x}`}>
                  <AccordionTrigger className="font-bold uppercase">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.subMenu ? (
                      item.subMenu.map((subItem, y) => (
                        <div className="py-3" key={y}>
                          <a href={subItem.href}>
                            <div className="flex items-center gap-2">
                              <ArrowSquareRight className="size-3" />
                              <span className="font-medium uppercase text-sm">
                                {subItem.title}
                              </span>
                            </div>
                          </a>
                        </div>
                      ))
                    ) : (
                      <a key={x} href={item.href}>
                        <div className="flex items-center gap-2">
                          <ArrowSquareRight className="size-3" />
                          <span className="font-medium uppercase text-sm">
                            {item.title}
                          </span>
                        </div>
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </>
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
