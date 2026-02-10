import { getCookie } from "@/app/actions";
import FadeIn from "@/components/fadein";
import FormError from "@/components/form_err";
import SecretContent from "@/components/page_home/secret";
import SecretHeading from "@/components/page_home/secret_heading";
import { decryptData } from "@/lib/e";
import { getSecret } from "@/lib/fetch/secrets";
import Link from "next/link";
export default async function Secret({ params }) {
  const { secret } = await params;
  const fetchSecret = await getSecret(secret);
  const protected_key = await getCookie("protected");
  let decrypt;
  let parse;
  let title;
  let date;
  let main_secret;
  try {
    decrypt = await decryptData(fetchSecret.payload, protected_key.value);
    parse = JSON.parse(decrypt.content);
    title = parse.title;
    date = parse.date;
    main_secret = parse.secret;
    return (
      <FadeIn>
        <section className="md:p-5 text-neutral-800 flex flex-col gap-7 md:pt-5 pt-10 relative pb-15">
          <div className="flex justify-between items-center">
            <Link href={"/home"} className="md:hidden text-accent underline">
              Back
            </Link>
          </div>
          <p className="text-xs text-neutral-600">{date}</p>
          <SecretHeading>{title}</SecretHeading>
          <SecretContent>{main_secret}</SecretContent>
        </section>
      </FadeIn>
    );
  } catch (err) {
    return (
      <main className="flex flex-col gap-5 md:my-0 my-10">
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
      </main>
    );
  }
}
