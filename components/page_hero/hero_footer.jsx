import Link from "next/link";

export default function HeroFooter() {
  return (
    <footer className="mt-2 md:mb-0 mb-30 relative">
      <Link
        href={"/new"}
        className="bg-accent text-white px-5 py-3.5 rounded-md gap-3"
      >
        Create my diary
      </Link>
    </footer>
  );
}
