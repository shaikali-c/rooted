import Link from "next/link";

export default function SecretCard({ data }) {
  const { title, uid, secret, date } = data;
  return (
    <Link
      href={`/home/${uid}`}
      className="w-full block border border-neutral-200 rounded-md p-5 hover:bg-neutral-200/35"
    >
      <header className="flex flex-col gap-2">
        <p className="text-xs text-neutral-600">{date}</p>
        <h2 className="font-diary text-xl text-neutral-800 font-semibold">
          {title}
        </h2>
      </header>
      <p className="text-sm text-neutral-600 line-clamp-3 leading-6">
        {secret}
      </p>
    </Link>
  );
}
