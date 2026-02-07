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
  const [savedMins, setSavedMins] = useState("Not Saved Yet");
  const lastHash = useRef(null);
  const lastSave = useRef(null);

  const handleSecretSubmit = async () => {
    // await fetch("/api/save", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(base_data),
    // });
    console.log("Saved");
  };
  useEffect(() => {
    const timeout = setTimeout(async () => {
      const base_data = { title, secret, date: date_f };

      const hash = await hashObject(base_data);
      if (hash === lastHash.current) return;

      lastHash.current = hash;
      lastSave.current = Date.now();

      console.log("Saving:", base_data);
      handleSecretSubmit();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [title, secret]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof lastSave.current !== "number") return;

      const diffMs = Date.now() - lastSave.current;
      if (!Number.isFinite(diffMs)) return;

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
    <main className="w-screen h-dvh flex items-center justify-center bg-[#f6f5f2] text-neutral-900 font-diary">
      <div className="w-full max-w-5xl h-full flex flex-col p-6 gap-2">
        <CHeader title={title} setTitle={setTitle} />
        <CTextArea secret={secret} setSecret={setSecret} />
        <CHelpers savedMins={savedMins} secret={secret} />
      </div>
    </main>
  );
}
