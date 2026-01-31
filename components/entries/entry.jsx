export default function Entry({ data }) {
  return (
    <div className="w-full p-5 bg-neutral-100 text-neutral-700 rounded-md flex flex-col gap-1 border border-neutral-300 hover:bg-neutral-200/40">
      <header className="font-diary">
        {data.date}
        <h2 className="font-semibold text-xl text-neutral-800 mt-3">
          {data.title}
        </h2>
        <p className="text-neutral-500 mt-1 font-main text-sm leading-5 line-clamp-4">
          {data.content}
        </p>
      </header>
    </div>
  );
}
