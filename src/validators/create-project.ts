import { z } from "zod";

export const ProjectSchema = z.object({
  name: z.string().min(1, "Dé um nome para o projeto."),
  description: z.string().optional(),
});
