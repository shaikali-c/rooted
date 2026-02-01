import { Asterisk } from "lucide-react";
import Link from "next/link";

export default function HeroFooter() {
  return (
    <footer className="mt-2 md:mb-0 mb-30 relative flex items-center flex-col gap-4">
      <Link
        href={"/new"}
        className="bg-accent text-white px-5 py-3 rounded-md gap-3"
      >
        Start writing
      </Link>
      <p className="text-gray-700 font-geist flex items-center gap-1 text-sm">
        Zero-knowledge By Design
      </p>
    </footer>
  );
}
