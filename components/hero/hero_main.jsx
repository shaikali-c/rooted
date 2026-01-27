import HeroFooter from "./hero_footer";

export default function HeroMain() {
  return (
    <main className="w-full flex-1 flex flex-col items-center mt-30 text-neutral-950 gap-7 px-6 md:px-0 z-100">
      <h2
        className={`md:text-7xl text-5xl max-w-160 font-medium md:leading-19  font-geist`}
      >
        Write freely & stay secured.
      </h2>
      <p className="max-w-160 text-neutral-600 md:text-xl text-lg">
        Write freely, knowing every word is end-to-end encrypted. Only you can
        read what you write, always.
      </p>

      <HeroFooter />
    </main>
  );
}
