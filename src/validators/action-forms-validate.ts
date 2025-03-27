import { z } from "zod";

const clickActionSchema = z.object({
  type: z.literal("click"),
  name: z.string().min(1, "O nome é obrigatório"),
  clickType: z.enum(["left", "right", "double"]),
  selectorType: z.enum(["id", "name", "css", "xpath", "link-text"]),
  selectorValue: z.string().min(1, "O seletor é obrigatório"),
});

const typeActionSchema = z.object({
  type: z.literal("type"),
  name: z.string().min(1, "O nome é obrigatório"),
  selectorType: z.enum(["id", "name", "css", "xpath", "link-text"]),
  selectorValue: z.string().min(1, "O seletor é obrigatório"),
  text: z.string().min(1, "O texto é obrigatório"),
});

const navigateActionSchema = z.object({
  type: z.literal("navigate"),
  name: z.string().min(1, "O nome é obrigatório"),
  url: z.string().url("A URL deve ser válida"),
});

const hoverActionSchema = z.object({
  type: z.literal("hover"),
  name: z.string().min(1, "O nome é obrigatório"),
  selectorType: z.enum(["id", "name", "css", "xpath", "link-text"]),
  selectorValue: z.string().min(1, "O seletor é obrigatório"),
});

const actionSchema = z.union([
  clickActionSchema,
  typeActionSchema,
  navigateActionSchema,
  hoverActionSchema,
]);

export const ActionsSchema = z.object({
  actions: z.array(actionSchema),
});
