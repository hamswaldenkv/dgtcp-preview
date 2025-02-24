import SectionHeading from "../../_components/section-heading";
import { BlogList } from "./_components/blog-list";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Communiqués de presse" />

      <div className="container mx-auto">
        <BlogList />
      </div>
    </div>
  );
}
