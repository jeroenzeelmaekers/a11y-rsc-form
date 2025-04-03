"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitSignUp } from "./action";
import { useActionState } from "react";
import VisuallyHidden from "@/components/ui/VisuallyHidden";

export default function Home() {
  const [state, submitSignUpAction] = useActionState(SubmitSignUp, {
    success: false,
  });
  return (
    <main className="flex h-screen justify-center items-center">
      <article className="px-4 py-6 w-1/2 bg-background rounded-md h-fit border border-border shadow-md flex flex-col gap-6">
        <section className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-foreground">Sign up</h1>
          <p className="text-sm text-foreground/80">
            Create an account to have access to amazing features.
          </p>
        </section>
        <form className="flex flex-col gap-7" action={submitSignUpAction}>
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-1">
              <label className="text-md text-foreground" htmlFor="username">
                Username
              </label>
              <Input
                id="username"
                type="text"
                name="username"
                aria-required
                aria-describedby="username-hint"
              />
              <span id="username-hint" className="text-sm text-foreground/60">
                Must be between 3 and 20 characters long
              </span>
              {state.error?.username?._errors.map((error) => (
                <span key={error} className="text-red-600 text-xs">
                  {error}
                </span>
              ))}
            </section>
            <section className="flex flex-col gap-1">
              <label className="text-md text-foreground" htmlFor="email">
                E-mail address
              </label>
              <Input id="email" type="email" name="email" aria-required />
              {state.error?.email?._errors.map((error) => (
                <span key={error} className="text-red-600 text-xs">
                  {error}
                </span>
              ))}
            </section>
            <section className="flex flex-col gap-1">
              <label className="text-md text-foreground" htmlFor="displayname">
                Display name
              </label>
              <Input
                id="displayname"
                type="text"
                name="displayname"
                aria-required
              />
              {state.error?.displayname?._errors.map((error) => (
                <span key={error} className="text-red-600 text-xs">
                  {error}
                </span>
              ))}
            </section>
            <section className="flex flex-col gap-1">
              <label
                className="text-md text-foreground flex flex-row gap-1 items-center"
                htmlFor="website"
              >
                Website
                <VisuallyHidden className="text-sm text-foreground/50">
                  (optional)
                </VisuallyHidden>
              </label>
              <Input id="website" type="url" name="website" />
              {state.error?.website?._errors.map((error) => (
                <span key={error} className="text-red-600 text-xs">
                  {error}
                </span>
              ))}
            </section>
            <section className="flex flex-col gap-1">
              <label
                className="text-md text-foreground flex flex-row gap-1 items-center"
                htmlFor="about"
              >
                About
                <VisuallyHidden className="text-sm text-foreground/50">
                  (optional)
                </VisuallyHidden>
              </label>
              <Textarea id="about" name="about" />
              {state.error?.about?._errors.map((error) => (
                <span key={error} className="text-red-600 text-xs">
                  {error}
                </span>
              ))}
            </section>
          </div>
          <Button type="submit" formNoValidate>
            Sign up
          </Button>
        </form>
      </article>
    </main>
  );
}
