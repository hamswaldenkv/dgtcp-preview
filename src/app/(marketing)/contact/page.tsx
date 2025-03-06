import { MailIcon } from "lucide-react";
import SectionHeading from "../_components/section-heading";
import { Card } from "@/components/ui/card";
import { Call, Map } from "iconsax-react";
import ContactForm from "./_components/form-contact";

const locations = [
  {
    city: "Kinshasa",
    address: "14, Avenue Sergent Moke, Concession Safricas",
    phone: "+243 819 387 049",
    email: "secretariat-dg@dgtcp.cd",
  },
];

export default function Page() {
  return (
    <div className="min-h-[50vh] bg-white space-y-10 mb-10">
      <SectionHeading title="Contacter la DGTCP" />

      <div className="container mx-auto flex gap-10">
        <div className="md:w-1/2">
          <ContactForm />
        </div>

        <div className="md:w-1/2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Nos locaux
              </h2>
              <p className="text-sm text-muted-foreground">
                Trouvez nous à l'un de nos bureaux globaux
              </p>
            </div>
            <div className="space-y-4">
              {locations.map((location) => (
                <Card
                  key={location.city}
                  className="p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Map className="size-6 text-primary" />
                      <div>
                        <h3 className="font-medium text-xl">{location.city}</h3>
                        <p className="text-sm text-muted-foreground">
                          {location.address}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Call className="h-4 w-4 text-primary" />
                        <a
                          href={`tel:${location.phone}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MailIcon className="h-4 w-4 text-primary" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

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
