export default function Divider({ text = "That's all" }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-neutral-100 px-2 text-sm text-gray-500">
          {text}
        </span>
      </div>
    </div>
  );
}
