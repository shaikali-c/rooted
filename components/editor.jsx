"use client";

import { useEffect, useRef, useState } from "react";
import CTextArea from "@/components/page_new/main_textarea";
import CHelpers from "@/components/page_new/helpers";
import CHeader from "@/components/page_new/header";
import { date_f } from "@/lib/date";
import { hashObject } from "@/lib/hash_object";

export default function Editor({ id }) {
  const [secret, setSecret] = useState("");
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [savedMins, setSavedMins] = useState("Not Saved Yet");

  const debounceRef = useRef(null);
  const lastHash = useRef(null);
  const lastSave = useRef(null);
  const saveVersion = useRef(0);
  const handleSecretSubmit = async (base_data, version) => {
    try {
      const res = await fetch("/api/secret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(base_data),
      });

      if (!res.ok) throw new Error("Save failed");

      if (version === saveVersion.current) {
        lastSave.current = Date.now();
        setSaving(false);
      }
    } catch {
      if (version === saveVersion.current) {
        setSaving(false);
      }
    }
  };

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      const base_data = { title, uid: id, secret, date: date_f };

      const hash = await hashObject({ title, secret });
      if (hash === lastHash.current) return;

      lastHash.current = hash;

      const version = ++saveVersion.current;

      setSaving(true);
      handleSecretSubmit(base_data, version);
    }, 3000);

    return () => clearTimeout(debounceRef.current);
  }, [title, secret, id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof lastSave.current !== "number") return;

      const diffMs = Date.now() - lastSave.current;
      const mins = Math.floor(diffMs / 60000);
      const hours = Math.floor(mins / 60);

      if (hours > 0) {
        setSavedMins(`${hours} hr${hours > 1 ? "s" : ""} ago`);
      } else if (mins > 0) {
        setSavedMins(`${mins} min${mins > 1 ? "s" : ""} ago`);
      } else {
        setSavedMins("just now");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-screen h-dvh flex items-center justify-center bg-neutral-100 text-neutral-900 font-diary">
      <div className="w-full max-w-5xl h-full flex flex-col p-6 gap-2">
        <CHeader title={title} setTitle={setTitle} />
        <CTextArea secret={secret} setSecret={setSecret} />
        <CHelpers saving={saving} savedMins={savedMins} secret={secret} />
      </div>
    </main>
  );
}
