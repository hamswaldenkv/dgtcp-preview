"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

const menuItems = [
  {
    title: "Accueil",
    href: "/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    subMenuCover: "/static/images/bg-cover-01.jpg",
  },
  {
    title: "Services",
    href: "/services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Contact",
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
        <div className="px-4 sm:px-6 hidden md:block">
          <div className="flex justify-between items-center md:space-x-10 py-1">
            <div className="flex justify-start">
              <a href="/">
                <img
                  src="/static/images/header-logo.png"
                  className="h-16"
                  alt="DCGTP"
                />
              </a>
            </div>
            <div className=" flex justify-center">
              <NavigationMenu className="z-[9999] flex-1">
                <NavigationMenuList>
                  {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <span className="font-bold uppercase">
                            {item.title}
                          </span>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 md:hidden">
          <div className="flex justify-between items-center md:justify-start md:space-x-10 py-2">
            <div>
              <a href="/">
                <img
                  src="/static/images/header-logo.png"
                  className="h-12"
                  alt="DCGTP"
                />
              </a>
            </div>

            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setSheetOpen(true)}
            >
              <HambergerMenu className="size-8" />
            </Button>
          </div>
        </div>
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <Separator className="my-4" />

          <div className="space-y-3">
            {menuItems.map((item, x) => (
              <Link href={item.href} onClick={() => setSheetOpen(false)}>
                <div className="py-2">
                  <span className="font-bold text-xl text-left">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
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
