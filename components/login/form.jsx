"use client";

import { Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import { Strong, Text, TextLink } from "@/components/_ext/catalyst/text";
import MainLogo from "@/components/main_logo";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
export default function LoginForm({}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
  };
  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 gap-8"
      onSubmit={handleSubmit}
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
  );
}
