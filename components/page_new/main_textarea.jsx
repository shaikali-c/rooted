"use client";
import { useEffect, useState } from "react";
export default function CTextArea() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <textarea
        className="w-full h-full outline-0 resize-none text-lg text-neutral-800"
        placeholder="Start writing from here..."
      ></textarea>
    );
  }
  return (
    <textarea
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
      className="w-full h-full outline-0 resize-none text-lg text-neutral-900"
      placeholder="Start writing from here..."
    ></textarea>
  );
}
