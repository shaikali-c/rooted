import { Pencil } from "lucide-react";
import Link from "next/link";

export default function HeroFooter() {
  return (
    <footer className="md:mt-30 md:mb-0 mt-auto mb-30">
      <Link
        href={"/"}
        className="bg-neutral-900 text-white px-5 py-3 rounded-md flex items-center gap-3"
      >
        Write a note
        <Pencil size={20} />
      </Link>
    </footer>
  );
}
