import SecretSidebar from "@/components/page_home/secret_sidebar";
import { decryptData } from "@/lib/e";
import { getSecrets } from "@/lib/fetch/secrets";

export default async function HomeLayout({ children }) {
  const secrets_enc = await getSecrets();
  const secrets = await Promise.all(
    secrets_enc.map(async (item) => {
      const stringified = item.payload;
      return await decryptData(stringified, "123");
    }),
  );
  return (
    <main className="w-screen flex justify-center min-h-screen bg-neutral-100 text-gray-900 font-main">
      <section className="w-full grid md:grid-cols-[36%_63%] gap-5 max-w-7xl h-full">
        <SecretSidebar secrets={secrets} />
        {children}
      </section>
    </main>
  );
}
