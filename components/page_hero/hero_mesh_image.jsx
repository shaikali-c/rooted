"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroMeshImage({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      fill
      priority
      sizes="100vw"
      alt="Background"
      onLoad={() => setLoaded(true)}
      className={`
          transition-opacity duration-700 ease-out
          ${loaded ? "opacity-0" : "opacity-0"}
        `}
    />
  );
}
