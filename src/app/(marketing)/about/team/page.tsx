import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SectionHeading from "../../_components/section-heading";

const sections = [
  {
    title: "Directeur des Ressources Humaines",
    members: [
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
    ],
  },
  {
    title: "Directeur des Ressources Humaines",
    members: [
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "Monsieur X",
        role: "Directeur des Ressources Humaines",
        photo_url: "/static/images/profile.jpg",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-slate-300/10">
      <div className="min-h-[50vh] bg-white space-y-10">
        <SectionHeading title="Equipe" />
      </div>

      <div className="container mx-auto space-y-5 py-20">
        <div className="space-y-14">
          {sections.map((section, index) => (
            <div key={index} className="space-y-5">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div
                className={cn(
                  "grid gap-5 md:gap-8",
                  section.members.length > 1
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                )}
                aria-label="layout-grid-equals"
              >
                {section.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="shadow-sm p-5 bg-white flex gap-5"
                  >
                    <div className="h-[20rem] w-[15rem] bg-slate-400 relative">
                      <Image
                        src={member.photo_url}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-2 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h1 className="text-xl font-semibold">{member.name}</h1>
                        <p className="text-gray-500">{member.role}</p>
                      </div>
                      <div className="">
                        <p className="text-gray-500 text-sm">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis earum voluptate libero ratione
                          architecto tenetur suscipit, quibusdam esse aliquid
                          hic reprehenderit, quisquam cumque. Odio quas corporis
                          architecto nemo error! Voluptatibus.
                        </p>
                        <Separator className="my-5" />
                        <ul className="flex items-center justify-end gap-5">
                          <li>
                            <a
                              href="https://www.x.com/dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-x.svg"
                                alt=""
                                className="h-5 text-primary"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-facebook.svg"
                                alt=""
                                className="h-5 text-primary"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/dgtcp/"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-linkedin.svg"
                                alt=""
                                className="h-5 text-blue-500"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-instagram.svg"
                                alt=""
                                className="h-5 text-primary"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/@dgtcp.cd"
                              target="_blank"
                            >
                              <img
                                src="/static/icons/logo-youtube.svg"
                                alt=""
                                className="h-5 text-primary fill-primary"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
