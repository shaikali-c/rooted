"use client";
import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import MainLogo from "@/components/main_logo";
import { KeyIcon } from "@heroicons/react/20/solid";

export default function PageEnter() {
  return (
    <main className="h-dvh w-screen flex items-center justify-center flex-col bg-neutral-100 text-gray-900 font-main">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <form
            action="#"
            method="POST"
            className="grid w-full max-w-sm grid-cols-1 gap-8"
          >
            <MainLogo />
            <Heading className={"text-gray-900"}>
              Enter your password to continue
            </Heading>
            <Field>
              <Label>Password</Label>
              <InputGroup>
                <KeyIcon />
                <Input name="search" aria-label="Search" />
              </InputGroup>
              <Description className={"text-neutral-500"}>
                This password unlocks your encrypted entries.
              </Description>
            </Field>
            <button className="py-2 w-full bg-accent text-white font-semibold rounded-md">
              Enter
            </button>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
