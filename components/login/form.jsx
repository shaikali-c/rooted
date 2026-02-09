"use client";

import { Field, Label } from "@/components/_ext/catalyst/fieldset";
import { Heading } from "@/components/_ext/catalyst/heading";
import { Input, InputGroup } from "@/components/_ext/catalyst/input";
import { Strong, Text, TextLink } from "@/components/_ext/catalyst/text";
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import MainLogo from "@/components/main_logo";
import FormError from "../form_err";

export default function LoginForm({}) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
    const response = await res.json();
    console.log(response);
    if (!response.success) {
      setError(response.error);
    } else {
      setError(false);
      router.replace("/home");
    }
  };
  return (
    <form
      className="grid w-full max-w-sm grid-cols-1 gap-8"
      onSubmit={handleSubmit}
      method="POST"
    >
      <MainLogo />
      <Heading className={"text-gray-900"}>Welcome back</Heading>
      <Field>
        <Label>Username</Label>
        <InputGroup>
          <EnvelopeIcon />
          <Input name="username" aria-label="Search" />
        </InputGroup>
      </Field>
      <Field>
        <Label>Password</Label>
        <InputGroup>
          <KeyIcon />
          <Input name="password" aria-label="Search" />
        </InputGroup>
      </Field>
      {error && <FormError>Failed to authenticate</FormError>}
      <button
        className={`py-1.5 w-full ${loading ? "bg-accent/70" : "bg-accent"} text-white font-semibold rounded-md flex justify-center gap-2 items-center`}
        type="submit"
      >
        {loading && <Loader size={18} className={"animate-spin"} />}
        {loading ? "Logging in..." : "Login"}
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
