import React from "react";

export default function FeatureSection() {
  return (
    <div className="bg-black">
      <section className="py-32 container mx-auto">
        <div className="container max-w-6xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <img
              src="/static/images/product-placeholder-6.jpg"
              alt="placeholder"
              className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
            />
            <div className="lg:p-10">
              <h2 className="text-balance text-3xl font-medium md:text-5xl text-white">
                Ne vous contentez pas d'échanger des contacts : créez des liens
                solides.
              </h2>
              <p className="mt-1 text-white md:mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                alias unde et doloremque dignissimos error temporibus quisquam
                porro ducimus esse quod, a officiis.
              </p>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-6">
                Créer un compte{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 size-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
              <ul className="mt-10 flex-wrap items-center gap-6 space-y-6 md:flex md:space-y-0">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Quality
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Multi-purpose
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Easy to use
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big size-4"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>{" "}
                  Fast
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
