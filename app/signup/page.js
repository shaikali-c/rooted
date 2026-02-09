"use client";
import MainLogo from "@/components/main_logo";

import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import { Description, Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import { Strong, Text, TextLink } from "@/components/_ext/catalyst/text";

import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

import { useRef, useState } from "react";
import FormError from "@/components/form_err";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageSignup() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const username = useRef(null);
  const password = useRef(null);
  const confirm_password = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
        confirm_password: confirm_password.current.value,
      }),
    });
    setLoading(false);

    const response = await res.json();
    if (response.error) return setError(response.error);
    else setError(false);
    router.replace("/home");
  };
  return (
    <main className="h-dvh w-screen flex justify-center relative items-center font-main bg-neutral-100 text-gray-900">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <form
            onSubmit={handleSubmit}
            className="grid w-full max-w-sm grid-cols-1 gap-8"
          >
            <MainLogo />
            <Heading className={"text-gray-900"}>Start here</Heading>
            <Field>
              <Label>Unique username</Label>
              <InputGroup>
                <EnvelopeIcon />
                <Input
                  name="username"
                  ref={username}
                  aria-label="Username feild"
                />
              </InputGroup>
            </Field>
            <Field>
              <Label>New password</Label>
              <InputGroup>
                <KeyIcon />
                <Input
                  name="password"
                  type="password"
                  aria-label="Password"
                  ref={password}
                />
              </InputGroup>
            </Field>
            <Field>
              <Label>Confirm password</Label>
              <InputGroup>
                <KeyIcon />
                <Input
                  name="c_password"
                  type="password"
                  aria-label="Confirm password"
                  ref={confirm_password}
                />
              </InputGroup>
              <Description className={"text-neutral-500"}>
                If you forget your password, there is no way to recover it or
                change it.
              </Description>
            </Field>
            {error && <FormError>{error}</FormError>}
            <button
              className={`py-1.5 w-full ${loading ? "bg-accent/70" : "bg-accent"} text-white font-semibold rounded-md flex justify-center gap-2 items-center`}
              type="submit"
            >
              {loading && <Loader size={18} className={"animate-spin"} />}
              {loading ? "Signing up..." : "Sign up"}
            </button>
            <Text>
              Already have an account?{" "}
              <TextLink href="/login">
                <Strong>Login</Strong>
              </TextLink>
            </Text>
          </form>
        </AuthLayout>
      </div>
    </main>
  );
}
