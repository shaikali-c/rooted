"us";
export default function CDate() {
  const date = new Date();
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
  }).format(date);
  return <p className="text-xs font-main">{formatted}</p>;
}
