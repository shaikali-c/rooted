import { date_f } from "@/lib/date";

export default function CDate() {
  const formatted = date_f;
  return <p className="text-xs font-main">{formatted}</p>;
}
