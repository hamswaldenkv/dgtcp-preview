"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          Avez-vous des questions?
        </h2>
        <p className="text-sm text-muted-foreground">
          Remplissez le formulaire ci-dessous et nous vous contacterons dans les
          plus brefs délais.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Votre nom"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="transition-all duration-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>
        <div>
          <Textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-purple-200"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/50 transition-colors duration-300"
        >
          <Send className="mr-2 h-4 w-4" />
          Envoyez votre message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
