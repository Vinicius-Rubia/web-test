import { z } from "zod";
import { ActionsSchema } from "./action-forms-validate";
import { SignInSchema } from "./signin-validate";

export type AuthSigninType = z.infer<typeof SignInSchema>;
export type ActionsSchemaType = z.infer<typeof ActionsSchema>;
