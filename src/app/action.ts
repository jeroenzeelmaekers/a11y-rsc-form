"use server";

import { z, ZodFormattedError } from "zod";
import { SignUpSchema } from "./signUpSchema";

type State = {
  error?: ZodFormattedError<z.infer<typeof SignUpSchema>>;
  success: boolean;
  timestamp?: Date;
};

export async function SubmitSignUp(_prevState: State, formData: FormData) {
  const result = SignUpSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    displayname: formData.get("displayname"),
    website: formData.get("website"),
    about: formData.get("about"),
  });

  if (!result.success) {
    return {
      error: result.error.format(),
      success: false,
      timestamp: new Date(),
    };
  }

  console.log(result.data);

  return {
    success: true,
  };
}
