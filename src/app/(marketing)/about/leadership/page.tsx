import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sections = [
  {
    title: "Direction Générale",
    members: [
      {
        name: "MAABE MUANYIMI Serge",
        role: "DG/TR",
        photo_url: "/static/images/leadership-001.jpg",
      },
    ],
  },
  {
    title: "Directeurs adjoints",
    members: [
      {
        name: "KINDUELO LUMBU Lyvie",
        role: "DGA/AF",
        photo_url: "/static/images/about-person-02.webp",
      },
      {
        name: "MOKAKO KOLO Lydia",
        role: "Direction des moyens généraux du personnel",
        photo_url: "/static/images/about-person-02.webp",
      },
    ],
  },
  {
    title: "Directeurs",
    members: [
      {
        name: "KAZADI KATALA Désiré",
        role: "Directeur Informatique",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "MUNDELA MUANZA Franck",
        role: "Directeur / Inspection de service du trésor",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "SULIA KITAMBALA Mireille",
        role: "Direction du Trésor et Moyens de Financement",
        photo_url: "/static/images/profile-woman-placeholder.jpg",
      },
      {
        name: "NSIMBA NKINKI Eddy",
        role: "Direction de la Réglementation et de la Qualité Comptable",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "MATARY MOWENGE MORYWELL Jean-Claude",
        role: "Agence Centrale des Comptables du Trésor",
        photo_url: "/static/images/profile.jpg",
      },
      {
        name: "MAFUTALA BEKONDA Jean-Paul",
        role: "Direction juridique et Contentieux Financier",
        photo_url: "/static/images/profile.jpg",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-slate-300/10">
      <div className="container mx-auto space-y-5 py-20">
        <h1 className="text-4xl font-bold mb-4">Leadership</h1>

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
