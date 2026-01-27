import { sub_items } from "@/constants/hero/sub_items";
import { Cat } from "lucide-react";
import Link from "next/link";

export default function HeroHeader() {
  return (
    <header className="md:p-15 p-5 flex items-center justify-between text-neutral-950 font-semibold md:text-xl text-lg z-100">
      <h2 className="flex items-center gap-3">
        <Cat />
        Meow Notes
      </h2>
      <div className="md:flex items-center font-semibold gap-10 text-neutral-700 text-base hidden">
        {sub_items.map((item) => (
          <Link
            className="hover:text-neutral-900 hover:underline"
            href={item.path}
            key={item.item_name}
          >
            {item.item_name}
          </Link>
        ))}
      </div>
      <div className="flex md:gap-5 items-center">
        <Link
          href={"/"}
          className="px-5 py-2 bg-transparent text-sm text-neutral-950 hover:underline"
        >
          Sign Up
        </Link>
        <Link
          href={"/"}
          className="px-5 py-2 bg-neutral-900 font-normal text-sm text-neutral-100 rounded-md"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
