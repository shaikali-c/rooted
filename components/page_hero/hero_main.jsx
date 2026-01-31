import Link from "next/link";
import HeroFooter from "./hero_footer";
import Image from "next/image";
import ButterFly from "@/public/assets/butterfly.png";

export default function HeroMain() {
  return (
    <main className="w-full flex-1 flex flex-col items-center md:mt-30 text-neutral-950/95 gap-7 px-6 md:px-0 z-100 relative">
      <Image
        src={ButterFly}
        alt="ButterFly"
        priority
        placeholder="blur"
        sizes="(max-width: 768px) 60vw, 300px"
        className="w-fit h-fit object-contain left-0 bottom-10 md:absolute"
      />
      <h2
        className={`md:text-7xl text-5xl max-w-160 font-medium md:leading-22 text-gray-800 font-diary`}
      >
        A private place for your thoughts
      </h2>
      <p className="max-w-160 text-gray-800/80 md:text-xl text-lg leading-8.5">
        Everything you write is encrypted and stays private, only you can read
        it.
      </p>
      <HeroFooter />
    </main>
  );
}
