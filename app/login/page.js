import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import { Strong, Text, TextLink } from "@/components/_ext/catalyst/text";
import MainLogo from "@/components/main_logo";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function PageLogin() {
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
            <Heading className={"text-gray-900"}>Welcome back</Heading>
            <Field>
              <Label>Email</Label>
              <InputGroup>
                <EnvelopeIcon />
                <Input name="email" aria-label="Search" />
              </InputGroup>
            </Field>
            <Field>
              <Label>Password</Label>
              <InputGroup>
                <KeyIcon />
                <Input name="password" aria-label="Search" />
              </InputGroup>
              {/* <Description className={"text-neutral-500"}>
                Post quantum protected :)
              </Description>*/}
            </Field>
            <button
              className="py-1.5 w-full bg-accent text-white font-semibold rounded-md"
              type="submit"
            >
              Login
            </button>

            <Text>
              Dont't have an account?{" "}
              <TextLink href="/signup">
                <Strong>Sign up</Strong>
              </TextLink>
            </Text>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
