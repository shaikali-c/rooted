import SecretSidebar from "@/components/page_home/secret_sidebar";
import { getSecrets } from "@/lib/fetch/secrets";

export default async function HomeLayout({ children }) {
  const secrets = await getSecrets();
  return (
    <main className="w-screen min-h-dvh bg-neutral-100 flex justify-center text-neutral-800 font-geist">
      <section className="md:max-w-310 w-full bg-neutral-100 min-h-screen grid md:grid-cols-[33%_67%] gap-10 md:px-0 px-5">
        <SecretSidebar secrets={secrets} />
        <div className="md:p-25 md:max-h-dvh md:overflow-y-auto md:no-scrollbar ">
          {children}
        </div>
      </section>
    </main>
  );
}
