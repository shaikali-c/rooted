import SecretContent from "@/components/page_home/secret";
import SecretHeading from "@/components/page_home/secret_heading";
import { date_f } from "@/lib/date";

export default function PageHome() {
  return (
    <div className="hidden md:flex">
      <main className="flex flex-col gap-4">
        <p className="text-xs text-neutral-600">{date_f}</p>
        <SecretHeading>Protected by Encryption</SecretHeading>
        <SecretContent>
          Your notes are encrypted on your device, stay encrypted in transit and
          storage, and can only be decrypted by you.
        </SecretContent>
      </main>
    </div>
  );
}
