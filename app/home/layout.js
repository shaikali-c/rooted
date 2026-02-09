import { getSecrets } from "@/lib/fetch/secrets";
import SecretSidebar from "@/components/page_home/secret_sidebar";
import { decryptData } from "@/lib/e";

export default async function HomeLayout({ children }) {
  const secrets = await getSecrets();
  const decryptedArray = await Promise.all(
    secrets.map(async (item) => {
      const stringified = item.payload;
      return await decryptData(stringified, "123");
    }),
  );
  return (
    <main className="w-screen flex justify-center min-h-screen bg-neutral-100 text-gray-900 font-main">
      <section className="w-full grid md:grid-cols-[36%_63%] gap-10 max-w-7xl h-full">
        <SecretSidebar secrets={decryptedArray} />
        {children}
      </section>
    </main>
  );
}
