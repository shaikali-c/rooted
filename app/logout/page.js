"use client";

import { Rose } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutPage() {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const logout = async () => {
    try {
      setPending(true);
      await fetch("/api/logout");
      router.replace("/signup");
    } catch (err) {
      router.replace("/signup");
    }
  };
  return (
    <main className="relative p-10 w-screen h-dvh text-gray-800 font-geist font-semibold flex flex-col justify-center items-center text-xl gap-5">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_55%,#f43f5e_100%)]"></div>
      <button
        onClick={logout}
        className="bg-rose-400 text-white px-5 py-2 rounded-md gap-3 font-semibold"
      >
        Logout
      </button>
    </main>
  );
}
