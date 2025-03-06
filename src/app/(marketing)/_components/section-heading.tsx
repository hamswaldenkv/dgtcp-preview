import React from "react";

interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className=" bg-[#112673] flex flex-col justify-end p-10 py-16">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center md:text-left">
          {title}
        </h1>
      </div>
    </div>
  );
}
