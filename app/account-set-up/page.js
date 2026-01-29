import Image from "next/image";
import FlowerImage from "@/public/assets/tree.png";
import { Cat } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  return (
    <section className="bg-white h-dvh w-screen flex flex-col-reverse md:grid md:grid-cols-2">
      <div className="relative w-full h-full flex flex-col">
        <Image
          src={FlowerImage}
          alt="Best Image"
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
            <Link
              href={"/new"}
              className="px-5 py-2.5 bg-accent w-fit text-white rounded-md font-semibold"
            >
              Create my diary
            </Link>
          </main>
        </div>
      </section>
    </section>
  );
}
