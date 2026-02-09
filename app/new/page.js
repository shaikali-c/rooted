"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader, LoaderCircle } from "lucide-react";
import { v4 } from "uuid";

function generateHash() {
  return v4();
}

export default function NewPage() {
  const router = useRouter();

  useEffect(() => {
    const createSecret = async () => {
      const hash = generateHash();

      const res = await fetch("/api/create_secret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hash }),
      });

      if (!res.ok) {
        return;
      }

      router.replace(`/new/${hash}`);
    };
    createSecret();
  }, []);

  return (
    <div className="flex items-center justify-center bg-neutral-100 h-dvh w-screen text-gray-900 font-main flex-col gap-2">
      <Loader size={24} className="animate-[spin_2s_linear_infinite]" />
      <p>Creating new session</p>
    </div>
  );
}
