import { wordCount } from "@/helpers/wordcount";
import { Smile } from "lucide-react";

function formatSavedTime(mins) {
  if (mins < 1) return "just now";
  if (mins < 60) return `${Math.floor(mins)} min${mins >= 2 ? "s" : ""} ago`;

  const hrs = Math.floor(mins / 60);
  return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
}

export default function CHelpers({ secret, savedMins }) {
  return (
    <div className="flex justify-between items-center font-geist text-neutral-700 text-sm">
      <p>Saved · {formatSavedTime(savedMins)}</p>
      <p>{wordCount(secret)} words</p>
      <p>
        <Smile />
      </p>
    </div>
  );
}
