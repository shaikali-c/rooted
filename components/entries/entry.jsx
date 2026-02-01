export default function Entry({ data, active = false }) {
  return (
    <div
      // className={`w-full p-5 ${active ? "bg-neutral-200/40" : "bg-neutral-100"} text-neutral-700 rounded-md flex flex-col gap-1 border ${active ? "border-neutral-300" : "border-neutral-100"} hover:border-neutral-300 hover:bg-neutral-200/40 cursor-pointer`}
      className={`w-full py-7 p-5 flex flex-col gap-2 border border-neutral-200 text-neutral-700 rounded-md ${active ? "md:bg-neutral-200/40 md:border-neutral-300" : "bg-neutral-100 md:border-neutral-100 hover:bg-neutral-200/40"}`}
    >
      <header className="font-geist text-xs">
        {data.date}
        <h2
          className={`font-semibold text-xl ${active ? "md:text-neutral-900" : "text-neutral-800 md:text-neutral-600"} mt-3 font-diary`}
        >
          {data.title}
        </h2>
        <p className="text-neutral-500 mt-1 font-main text-sm leading-5 line-clamp-4">
          {data.content}
        </p>
      </header>
    </div>
  );
}
