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
  heading = "Derniers communiqués",
  description = "Decouvrez nos derniers communiqués de presse",
  posts = [
    {
      id: "post-1",
      title: "Programme d'action du gouvernement",
      summary:
        "Le Programme d'action du gouvernement est un document officiel du Ministère des Finances de la République Démocratique du Congo.",
      label: "Annonces",
      author: "Lydia Kamuha",
      published: "15 Feb 2025",
      url: "/actualites/annonces",
      image: "/static/images/about-office-01.webp",
      tags: ["Annonces", "Actualités"],
    },
    {
      id: "post-2",
      title: "Manuel des procédures du circuit de la dépense publique",
      summary:
        "Le Manuel des procédures du circuit de la dépense publique est un document officiel du Ministère des Finances de la République Démocratique du Congo.",
      label: "Annonces",
      author: "Lydia Kamuha",
      published: "22 Feb 2025",
      url: "/actualites/annonces",
      image: "/static/images/about-office-02.webp",
      tags: ["Annonces", "Actualités"],
    },
  ],
}: BlogListProps) => {
  return (
    <section className="py-10">
      <div className="container flex flex-col items-center gap-16">
        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                      {post.tags?.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-muted-foreground md:mt-5">
                    {post.summary}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.published}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <a
                      href={post.url}
                      target="_blank"
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Lire plus</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <a href={post.url} target="_blank" className="block">
                    <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70 animate-appear"
                      />
                    </div>
                  </a>
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
