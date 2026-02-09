import FadeIn from "@/components/fadein";
import SecretContent from "@/components/page_home/secret";
import SecretHeading from "@/components/page_home/secret_heading";
import { decryptData } from "@/lib/e";
import { getSecret } from "@/lib/fetch/secrets";
import Link from "next/link";

export default async function Secret({ params }) {
  const { secret } = await params;
  const fetchSecret = await getSecret(secret);
  const decrypt = await decryptData(fetchSecret.payload, "123");
  const parse = JSON.parse(decrypt.content);
  const { title, date } = parse;
  const main_secret = parse.secret;
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
}
