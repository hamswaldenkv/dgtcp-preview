import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface BlogListProps {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const BlogList = ({
  heading = "Evénements publiés",
  description = "Decouvrez nos derniers événements publiés",
  posts = [
    {
      id: "post-1",
      title: "Programme d'action du gouvernement",
      summary:
        "Le Programme d'action du gouvernement est un document officiel du Ministère des Finances de la République Démocratique du Congo.",
      label: "Presse",
      author: "Lydia Kamuha",
      published: "15 Feb 2025",
      url: "/static/docs/0-cadre_organique-dgtcp-annexe decret.22.54.30.12.2022.pdf",
      image: "/static/images/about-office-01.webp",
      tags: ["Presse", "Actualités"],
    },
    {
      id: "post-2",
      title: "Manuel des procédures du circuit de la dépense publique",
      summary:
        "Le Manuel des procédures du circuit de la dépense publique est un document officiel du Ministère des Finances de la République Démocratique du Congo.",
      label: "Presse",
      author: "Lydia Kamuha",
      published: "22 Feb 2025",
      url: "/static/docs/0-cadre_organique-dgtcp-annexe decret.22.54.30.12.2022.pdf",
      image: "/static/images/about-office-02.webp",
      tags: ["Presse", "Actualités"],
    },
  ],
}: BlogListProps) => {
  return (
    <section className="py-10">
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="border border-border/50 divide-y divide-border p-10">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="border-0 bg-transparent shadow-none py-10"
            >
              <div className="flex justify-start md:gap-x-8 lg:gap-x-12">
                <div>
                  <div className="w-[4rem] rounded border border-border/50 overflow-hidden">
                    <div className="bg-primary h-[3rem] w-full flex flex-col justify-center items-center">
                      <span className="text-center text-2xl font-semibold text-white">
                        10
                      </span>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center py-2">
                      <span className="text-center text-lg font-semibold">
                        Fevr.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <div className="my-2 md:my-3">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-sm"
                    >
                      <span>Télécharger le document</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogList };
