"use server";

import { z, ZodFormattedError } from "zod";
import { SignUpSchema } from "./signUpSchema";

type State = {
  error?: ZodFormattedError<z.infer<typeof SignUpSchema>>;
  success: boolean;
};

export async function SubmitSignUp(_prevState: State, formData: FormData) {
  const raw = {
    username: formData.get("username")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    displayname: formData.get("displayname")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "",
    about: formData.get("about")?.toString() ?? "",
  };
  const result = SignUpSchema.safeParse(raw);

  if (!result.success) {
    const { fieldErrors } = result.error.flatten();

    return { errors: fieldErrors, success: false };
  }

  console.log(result.data);

  return {
    success: true,
  };
}
