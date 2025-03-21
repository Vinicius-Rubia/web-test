import { z } from "zod";
import { SignInSchema } from "./signin-validate";

export type AuthSigninType = z.infer<typeof SignInSchema>;
