import FormError from "@/components/form_err";
import Link from "next/link";

export default function InvalidPage() {
  return (
    <main className="w-screen min-h-dvh bg-neutral-100 flex justify-center text-neutral-800 font-geist px-5 flex-col items-center">
      <div className="w-full max-w-100 flex flex-col gap-5">
        <FormError>
          Decryption failed: In cryptography, decryption succeeds only with the
          correct key; using a wrong key produces random or invalid output (or a
          verification failure), because the ciphertext has no meaningful
          structure without the exact key that was used for encryption.
        </FormError>

        <Link
          href={"/protected"}
          className="text-white bg-accent w-fit px-4 py-2.5 ml-1 rounded-md"
        >
          Enter password
        </Link>
      </div>
    </main>
  );
}
