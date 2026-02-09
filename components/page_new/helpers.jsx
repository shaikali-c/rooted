import { wordCount } from "@/helpers/wordcount";
import { Smile } from "lucide-react";

export default function CHelpers({ secret, savedMins, saving }) {
  return (
    <div className="flex w-full justify-between items-center font-geist text-neutral-700 text-sm">
      <p>
        {saving ? "Saving" : "Saved"} · {savedMins}
      </p>
      <p>{wordCount(secret)} words</p>
      <p>
        <Smile />
      </p>
    </div>
  );
}
