import Link from "next/link";

export default function Entry({ data, active, id }) {
  return (
    <Link
      href={`/home/${id}`}
      className={`relative cursor-pointer w-full py-7 p-5 flex flex-col gap-2 border border-neutral-200 text-neutral-700 rounded-md ${active ? "md:bg-neutral-200/40 md:border-neutral-300" : "bg-neutral-100 md:border-neutral-100 hover:bg-neutral-200/40"}  transition-colors block`}
    >
      <header className="font-geist text-xs">
        {data.date}
        <h2
          className={` transition-colors font-semibold text-xl text-neutral-800  ${active ? "md:text-neutral-900" : "md:text-neutral-600"} mt-3 font-diary`}
        >
          {data.title}
        </h2>
        <p className="text-neutral-500 mt-1 font-main text-sm leading-5 line-clamp-3">
          {data.secret}
        </p>
      </header>
    </Link>
  );
}
