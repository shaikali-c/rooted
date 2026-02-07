import Link from "next/link";

export default function PrimaryButton({ children, href }) {
  return (
    <Link
      href={href}
      className="bg-accent text-white px-5 py-3 rounded-md gap-3 font-semibold"
    >
      {children}
    </Link>
  );
}
