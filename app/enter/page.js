import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Button } from "@/components/_ext/catalyst/button";
import { Checkbox, CheckboxField } from "@/components/_ext/catalyst/checkbox";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input } from "@/components/_ext/catalyst/input";
import { Strong, Text, TextLink } from "@/components/_ext/catalyst/text";
import MainLogo from "@/components/main_logo";
import { Cat } from "lucide-react";

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
            <Heading className={"text-gray-900"}>Everything is secured</Heading>
            <Field>
              <Label>Type your password</Label>
              <Input type="password" name="password" />
            </Field>
            <div className="flex items-center justify-between">
              <CheckboxField>
                <Checkbox name="remember" />
                <Label>Remember me</Label>
              </CheckboxField>
            </div>
            <Button type="submit" className="w-full" color="blue">
              Enter
            </Button>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
