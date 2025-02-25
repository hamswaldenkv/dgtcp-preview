import SectionHeading from "../../_components/section-heading";
import { BlogList } from "./_components/blog-list";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Rapports d'activité" />

      <div className="container mx-auto">
        <BlogList posts={[]} />
      </div>
    </div>
  );
}
