import Image from "next/image";
import FlowerImage from "@/public/assets/tree.png";
import { ArrowRight, Cat } from "lucide-react";
import Link from "next/link";
import HeroMeshImage from "@/components/page_hero/hero_mesh_image";

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
      <section className="text-black flex items-center justify-center min-h-80 md:min-h-auto font-geist font-medium flex-col relative">
        <Cat className="mb-5" />
        <div className="z-1">
          <main className="text-center flex flex-col gap-3 justify-center items-center">
            <h2 className="md:text-4xl text-3xl ">
              SETUP YOUR <br />
              SECURE ACCOUNT
            </h2>
            <p className="text-neutral-700 px-4 md:max-w-100">
              Make a secure account using cryptography to make the encryption
              impossible to crack.
            </p>
            <Link
              href={"/new"}
              className="px-5 py-3 bg-neutral-900 w-fit text-white rounded-md"
            >
              Continue
            </Link>
          </main>
        </div>
      </section>
    </section>
  );
}
