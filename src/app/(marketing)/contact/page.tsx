import { ArrowRightCircle, MailIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "../_components/section-heading";
import { Card } from "@/components/ui/card";
import { Call, Map } from "iconsax-react";
import ContactForm from "./_components/form-contact";

const locations = [
  {
    city: "Kinshasa",
    address: "123 Broadway St, NY 10013",
    phone: "+243 810 000 111",
    email: "kinshasa@dgtcp.cd",
  },
  {
    city: "Matadi",
    address: "456 Oxford St, London W1C 1AP",
    phone: "+243 810 000 111",
    email: "matadi@dgtcp.cd",
  },
  {
    city: "Lubumbashi",
    address: "789 Shibuya, Tokyo 150-0002",
    phone: "+243 810 000 111",
    email: "lubumbashi@dgtcp.cd",
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
                    <div className="flex items-center space-x-2">
                      <Map className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{location.city}</h3>
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
    </div>
  );
}
