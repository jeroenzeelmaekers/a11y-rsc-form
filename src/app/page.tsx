"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitSignUp } from "./action";
import { HTMLAttributes, ReactNode, useActionState } from "react";
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
        <form
          className="flex flex-col gap-7"
          action={submitSignUpAction}
          noValidate
        >
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
                aria-invalid={state.errors?.username ? "true" : undefined}
                aria-describedby="username-hint username-error"
              />
              <span id="username-hint" className="text-sm text-foreground/60">
                Must be between 3 and 20 characters long
              </span>
              {state.errors?.username && (
                <ErrorField id="username-error">
                  {state.errors?.username[0]}
                </ErrorField>
              )}
            </section>
            <section className="flex flex-col gap-1">
              <label className="text-md text-foreground" htmlFor="email">
                E-mail address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                aria-required
                aria-invalid={state.errors?.email ? "true" : undefined}
                aria-describedby="email-error"
              />
              {state.errors?.email && (
                <ErrorField id="email-error">
                  {state.errors?.email[0]}
                </ErrorField>
              )}
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
                aria-invalid={state.errors?.displayname ? "true" : undefined}
                aria-describedby="displayname-error"
              />
              {state.errors?.displayname && (
                <ErrorField id="displayname-error">
                  {state.errors?.displayname[0]}
                </ErrorField>
              )}
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
              <Input
                id="website"
                type="url"
                name="website"
                aria-invalid={state.errors?.website ? "true" : undefined}
                aria-describedby="website-error"
              />
              {state.errors?.website && (
                <ErrorField id="website-error">
                  {state.errors?.website[0]}
                </ErrorField>
              )}
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
              <Textarea
                id="about"
                name="about"
                aria-invalid={state.errors?.about ? "true" : undefined}
                aria-describedby="about-error"
              />
              {state.errors?.about && (
                <ErrorField id="about-error">
                  {state.errors?.about[0]}
                </ErrorField>
              )}
            </section>
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </article>
    </main>
  );
}

interface ErrorFieldProps extends HTMLAttributes<HTMLSpanElement> {
  children: Readonly<ReactNode>;
}

function ErrorField({ ...props }: ErrorFieldProps) {
  return (
    <span
      className="text-red-600 text-xs"
      role="alert"
      aria-live="assertive"
      {...props}
    />
  );
}
