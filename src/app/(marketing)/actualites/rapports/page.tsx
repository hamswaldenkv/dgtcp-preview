import SectionHeading from "../../_components/section-heading";
import { BlogList } from "./_components/blog-list";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Rapports d'activité" />

      <div className="container mx-auto">
        <BlogList
          posts={[
            {
              id: "post-1",
              title: "Note hebdomadaire des opérations du trésor",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ullam ducimus sed consectetur est",
              label: "Document",
              author: "Lydia Kamuha",
              published: "15 Feb 2025",
              url: "#",
              image: "/static/images/about-office-01.webp",
              tags: ["Note", "Document"],
            },
            {
              id: "post-1",
              title: "Note Mensuelle des opérations du trésor",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ullam ducimus sed consectetur est",
              label: "Document",
              author: "Lydia Kamuha",
              published: "15 Feb 2025",
              url: "#",
              image: "/static/images/about-office-01.webp",
              tags: ["Note", "Document"],
            },
            {
              id: "post-1",
              title: "Revenue mensuelle des opérations du trésor",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ullam ducimus sed consectetur est",
              label: "Document",
              author: "Lydia Kamuha",
              published: "15 Feb 2025",
              url: "#",
              image: "/static/images/about-office-01.webp",
              tags: ["Note", "Document"],
            },
            {
              id: "post-1",
              title: "Bulletin mensuel n°416 - Janvier 2025",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ullam ducimus sed consectetur est",
              label: "Document",
              author: "Lydia Kamuha",
              published: "15 Feb 2025",
              url: "#",
              image: "/static/images/about-office-01.webp",
              tags: ["Note", "Document"],
            },
            {
              id: "post-1",
              title: "Bulletin mensuel n°417 - Février 2025",
              summary:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ullam ducimus sed consectetur est",
              label: "Document",
              author: "Lydia Kamuha",
              published: "15 Feb 2025",
              url: "#",
              image: "/static/images/about-office-01.webp",
              tags: ["Note", "Document"],
            },
          ]}
        />
      </div>
    </div>
  );
}
