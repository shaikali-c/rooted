"use client";
export default function CTextArea({ secret, setSecret }) {
  const handleChange = (e) => {
    setSecret(e.target.value);
  };
  return (
    <textarea
      suppressHydrationWarning
      onChange={handleChange}
      spellCheck={false}
      autoCorrect="off"
      autoCapitalize="off"
      value={secret}
      className="w-full h-full outline-0 resize-none text-lg text-neutral-900"
      placeholder="Start writing from here..."
    ></textarea>
  );
}
