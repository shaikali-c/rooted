import { sub_items } from "@/constants/hero/sub_items";
import { Cat } from "lucide-react";
import Link from "next/link";

export default function HeroHeader() {
  return (
    <header className="md:p-15 p-5 flex items-center justify-between text-main-heading font-semibold md:text-xl text-lg z-100">
      <h2 className="flex items-center gap-2 text-gray-900">
        <Cat />
        Rooted
      </h2>
      <div className="md:flex items-center font-semibold gap-10 text-gray-900 text-base hidden">
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
          href={"/account-set-up"}
          className="px-4 py-1.5  text-accent hover:bg-accent hover:text-white text-sm rounded-md transition-colors"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
