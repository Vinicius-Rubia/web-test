import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("O e-mail não é valido."),
  password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
});
