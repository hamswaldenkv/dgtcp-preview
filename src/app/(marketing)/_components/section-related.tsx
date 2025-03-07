import React from "react";
import Link from "next/link";
import { ArrowCircleRight } from "iconsax-react";
import Image from "next/image";

interface Props {
  links: Array<{
    href: string;
    title: string;
    description?: string;
    photo_url: string;
  }>;
}

export default function SectionRelated({ links }: Props) {
  return (
    <div className="py-20 bg-slate-300/10">
      <div className="max-w-[90%] md:container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          aria-label="layout-grid-equals"
        >
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="bg-white hover:bg-primary/10 transition duration-300 animate-appear shadow-sm">
                <div className="h-[10rem] md:h-[22rem] bg-slate-200 relative">
                  <Image
                    src={link.photo_url}
                    alt={link.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="h-[10rem] p-10">
                  <h1 className="font-bold text-2xl">{link.title}</h1>
                  {link.description && (
                    <p className="text-sm">{link.description}</p>
                  )}
                  <div className="flex justify-end">
                    <ArrowCircleRight className="size-8 text-primary" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
