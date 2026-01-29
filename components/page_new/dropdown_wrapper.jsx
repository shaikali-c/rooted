"use client";
import { useEffect, useState } from "react";
import DropDown from "../_ext/dropdown";

export default function DropDownWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="px-2 rounded-md bg-neutral-200" />;
  }

  return <DropDown />;
}
