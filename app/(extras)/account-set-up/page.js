import Image from "next/image";
import FlowerImage from "@/public/assets/tree.png";
import { Cat } from "lucide-react";
import PrimaryButton from "@/components/primary_btn";

export default function AccountPage() {
  return (
    <section className=" h-dvh w-screen bg-neutral-100 flex flex-col-reverse md:grid md:grid-cols-2 relative">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={FlowerImage}
          alt="Best Image"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          className="md:object-cover object-contain mt-auto"
        />
      </div>
      <section className="text-gray-900 flex items-center justify-center min-h-80 md:min-h-auto font-geist font-medium flex-col relative">
        <Cat className="mb-5" />
        <div className="z-1">
          <main className="text-center flex flex-col gap-5 justify-center items-center">
            <h2 className="md:text-4xl text-3xl tracking-tight">
              A private place for your thoughts
            </h2>
            <p className="text-gray-700 px-4 md:max-w-100">
              Everything you write is encrypted and stays private, so your
              thoughts remain yours.
            </p>
            <PrimaryButton href="/new">Create my note</PrimaryButton>
          </main>
        </div>
      </section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]"></div>
    </section>
  );
}
