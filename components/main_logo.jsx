import { Cat } from "lucide-react";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 font-semibold text-gray-900"
    >
      <Cat />
      Rooted
    </Link>
  );
}
