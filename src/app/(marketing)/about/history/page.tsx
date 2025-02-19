import SectionRelated from "../../_components/section-related";
import SectionHeading from "../../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10">
      <SectionHeading title="Histoire" />

      <div className="container mx-auto flex gap-10">
        <div className="h-[40rem] w-1/3 bg-slate-100"></div>
        <div className="flex-1 p-10 space-y-5">
          <h1 className="text-4xl font-bold">Histoire de la DGTCP</h1>
          <p className="text-base">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
            etiam tincidunt dictumst vestibulum ultricies ac duis dictum
            aliquam. Amet tortor mauris quam elit duis vivamus nullam
            consectetur. Dictumst enim nisi phasellus massa laoreet himenaeos
            ipsum porttitor. Eget rutrum nec nascetur consectetur; sapien
            interdum nec tristique arcu. Aptent porta nullam nunc; maximus
            egestas odio. Tristique velit purus neque tristique ullamcorper
            augue maecenas. Fames potenti eget vivamus finibus mauris purus
            tortor. Lacinia in nisi lectus phasellus gravida, augue dapibus
            pulvinar viverra. Mattis imperdiet tortor placerat ad curabitur vel.
            Sapien nunc aenean cras sociosqu nisl molestie nec. Mollis imperdiet
            interdum imperdiet euismod egestas at platea.
          </p>
          <p className="text-base">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
            etiam tincidunt dictumst vestibulum ultricies ac duis dictum
            aliquam. Amet tortor mauris quam elit duis vivamus nullam
            consectetur. Dictumst enim nisi phasellus massa laoreet himenaeos
            ipsum porttitor. Eget rutrum nec nascetur consectetur; sapien
            interdum nec tristique arcu. Aptent porta nullam nunc; maximus
            egestas odio. Tristique velit purus neque tristique ullamcorper
            augue maecenas. Fames potenti eget vivamus finibus mauris purus
            tortor. Lacinia in nisi lectus phasellus gravida, augue dapibus
            pulvinar viverra. Mattis imperdiet tortor placerat ad curabitur vel.
            Sapien nunc aenean cras sociosqu nisl molestie nec. Mollis imperdiet
            interdum imperdiet euismod egestas at platea.
          </p>
          <p className="text-base">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
            etiam tincidunt dictumst vestibulum ultricies ac duis dictum
            aliquam. Amet tortor mauris quam elit duis vivamus nullam
            consectetur. Dictumst enim nisi phasellus massa laoreet himenaeos
            ipsum porttitor. Eget rutrum nec nascetur consectetur; sapien
            interdum nec tristique arcu. Aptent porta nullam nunc; maximus
            egestas odio. Tristique velit purus neque tristique ullamcorper
            augue maecenas. Fames potenti eget vivamus finibus mauris purus
            tortor. Lacinia in nisi lectus phasellus gravida, augue dapibus
            pulvinar viverra. Mattis imperdiet tortor placerat ad curabitur vel.
            Sapien nunc aenean cras sociosqu nisl molestie nec. Mollis imperdiet
            interdum imperdiet euismod egestas at platea.
          </p>
        </div>
      </div>

      <SectionRelated
        links={[
          {
            href: "/about/leadership",
            title: "Leadership",
            description: "Leadership",
            photo_url: "/static/images/bg-cover-01.jpg",
          },
          {
            href: "/about/legal-texts",
            title: "Textes référentiels",
            description: "Textes référentiels",
            photo_url: "/static/images/cover-placeholder.jpeg",
          },
          {
            href: "/about/missions",
            title: "Missions successives",
            description: "Missions successives",
            photo_url: "/static/images/cover-placeholder.jpeg",
          },
        ]}
      />
    </div>
  );
}
