import { createCookie } from "@/app/actions";
import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import MainLogo from "@/components/main_logo";
import { KeyIcon } from "@heroicons/react/20/solid";
import { redirect } from "next/navigation";

export default async function PageEnter({ searchParams }) {
  const { invalid } = await searchParams;
  async function storeProtected(formData) {
    "use server";

    const data = {
      protected: formData.get("protected"),
    };
    await createCookie("protected", data.protected);
    redirect("/home");
  }
  return (
    <main className="h-dvh w-screen flex items-center justify-center flex-col bg-neutral-100 text-gray-900 font-main">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <form
            className="grid w-full max-w-sm grid-cols-1 gap-8"
            action={storeProtected}
          >
            <MainLogo />
            <Heading className={"text-gray-900"}>
              {!invalid
                ? "Enter your protected password to continue"
                : "Incorrect password"}
            </Heading>
            <Field>
              <Label>Password</Label>
              <InputGroup>
                <KeyIcon />
                <Input
                  name="protected"
                  type="password"
                  aria-label="Protected password"
                />
              </InputGroup>
              <Description className={"text-neutral-500"}>
                This password will be used to unlock your encrypted entries.
              </Description>
            </Field>
            <button
              className="py-1.5 w-full bg-accent text-white font-semibold rounded-md"
              type="submit"
            >
              Enter
            </button>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
