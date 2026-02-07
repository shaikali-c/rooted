import { wordCount } from "@/helpers/wordcount";
import { Smile } from "lucide-react";

export default function CHelpers({ secret, savedMins }) {
  return (
    <div className="flex justify-between items-center font-geist text-neutral-700 text-sm">
      <p>Saved · {savedMins}</p>
      <p>{wordCount(secret)} words</p>
      <p>
        <Smile />
      </p>
    </div>
  );
}
