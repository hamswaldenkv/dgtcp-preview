import ContactForm from "./_components/form-contact";
import SectionHeading from "../_components/section-heading";

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Contacts" />

      <ContactForm />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d248.65410721391484!2d15.27628823447566!3d-4.323265073059473!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scd!4v1741275920471!5m2!1sfr!2scd"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[25rem] md:h-[40rem] bg-primary/10"
      />
    </div>
  );
}
