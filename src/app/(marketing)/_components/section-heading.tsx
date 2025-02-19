import React from "react";

interface Props {
  title: string;
}

export default function SectionHeading({ title }: Props) {
  return (
    <div className="h-[15rem] bg-[#112673] flex flex-col justify-end p-10">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
