import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import { Text } from "@/components/_ext/catalyst/text";
import MainLogo from "@/components/main_logo";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function PageSignup() {
  return (
    <main className="h-dvh w-screen flex justify-center relative items-center font-main bg-neutral-100 text-gray-900">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <form
            action="#"
            method="POST"
            className="grid w-full max-w-sm grid-cols-1 gap-8"
          >
            <MainLogo />
            <Heading className={"text-gray-900"}>Start here</Heading>
            <Field>
              <Label>New email</Label>
              <InputGroup>
                <EnvelopeIcon />
                <Input name="email" aria-label="Search" />
              </InputGroup>
            </Field>
            <Field>
              <Label>New password</Label>
              <InputGroup>
                <KeyIcon />
                <Input name="email" aria-label="Search" />
              </InputGroup>
            </Field>
            <Field>
              <Label>Confirm password</Label>
              <InputGroup>
                <KeyIcon />
                <Input name="password" aria-label="Search" />
              </InputGroup>
              <Description className={"text-neutral-500"}>
                If you forget your password, there is no way to recover it or
                change it.
              </Description>
            </Field>
            <button
              className="py-1.5 w-full bg-accent text-white font-semibold rounded-md"
              type="submit"
            >
              Continue
            </button>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
