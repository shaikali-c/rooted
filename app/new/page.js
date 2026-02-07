"use client";
import { useEffect, useRef, useState } from "react";
import CTextArea from "@/components/page_new/main_textarea";
import CHelpers from "@/components/page_new/helpers";
import CHeader from "@/components/page_new/header";
import { date_f } from "@/lib/date";
import { hashObject } from "@/lib/hash_object";

export default function PageNew() {
  const [secret, setSecret] = useState("");
  const [title, setTitle] = useState("");
  const [savedMins, setSavedMins] = useState(0);
  const lastHash = useRef(null);
  const lastSave = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const base_data = {
        title,
        secret,
        date: date_f,
      };

      const hash = await hashObject(base_data);
      if (hash === lastHash.current) return;

      lastHash.current = hash;
      lastSave.current = Date.now();

      console.log("Saving:", base_data);
    }, 3000);

    const interval = setInterval(() => {
      if (!lastSave.current) return;

      const mins = (Date.now() - lastSave.current) / 60000;
      setSavedMins(mins.toFixed(1));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [title, secret, savedMins]);

  return (
    <main className="w-screen h-dvh flex items-center justify-center bg-[#f6f5f2] text-neutral-900 font-diary">
      <div className="w-full max-w-5xl h-full flex flex-col p-6 gap-2">
        <CHeader title={title} setTitle={setTitle} />
        <CTextArea secret={secret} setSecret={setSecret} />
        <CHelpers savedMins={savedMins} secret={secret} />
      </div>
    </main>
  );
}
