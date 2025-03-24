"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="py-12">
        <div className="">
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
              <div className="text-center lg:text-left">
                <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                  Nous contacter
                </h1>
                <p className="text-muted-foreground">
                  Nous sommes à votre disposition pour toute question,
                  commentaire ou opportunité de collaboration. Dites-nous
                  comment nous pouvons vous aider !
                </p>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                  Nos contacts
                </h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="font-bold">Phone: </span>
                    (123) 34567890
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href="" className="underline">
                      your-email@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Subject" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default ContactForm;
