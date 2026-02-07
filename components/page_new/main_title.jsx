"use client";
export default function CTitle({ title, setTitle }) {
  return (
    <input
      type="text"
      placeholder="Title"
      className="bg-[#f6f5f2] outline-0 text-3xl font-medium text-neutral-900 mb-3"
      autoFocus
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
  );
}
