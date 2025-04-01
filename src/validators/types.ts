import { z } from "zod";
import { ActionsSchema } from "./action-forms-validate";
import { ProjectSchema } from "./create-project";
import { SignInSchema } from "./signin-validate";

export type AuthSigninType = z.infer<typeof SignInSchema>;
export type ActionsSchemaType = z.infer<typeof ActionsSchema>;
export type ProjectSchemaType = z.infer<typeof ProjectSchema>;
