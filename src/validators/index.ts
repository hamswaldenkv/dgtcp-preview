import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string({ message: "Veuillez remplir ce champs" }).email({
    message: "Veuillez entrer une adresse e-mail valide",
  }),
  password: z
    .string({ required_error: "Veuillez remplir ce champs" })
    .min(6, { message: "Veuillez entrer au moins 6 caractères" }),
});

export type LoginSchemaInput = z.infer<typeof LoginSchema>;

export const SignupSchema = LoginSchema.extend({
  displayName: z.string({ message: "Veuillez entrer votre identifiant" }),
});

export type SignupSchemaInput = z.infer<typeof SignupSchema>;
