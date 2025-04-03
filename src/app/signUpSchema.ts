import { z } from "zod";

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 character long" }),
  email: z.string().email({ message: "Email must be a valid email" }),
  displayname: z
    .string()
    .min(1, { message: "Displayname must be at least 1 character long" }),
  website: z.union([
    z.literal(""),
    z.string().trim().url({ message: "Invalid url" }),
  ]),
  about: z.string(),
});
