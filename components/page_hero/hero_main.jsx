import HeroFooter from "./hero_footer";

export default function HeroMain() {
  return (
    <main className="w-full flex-1 flex flex-col items-center md:mt-33 mt-30 text-neutral-950/95 gap-7 px-6 md:px-0 z-100 relative">
      <h2
        className={`md:text-7xl text-5xl max-w-160 font-medium md:leading-22 text-gray-800 font-diary`}
      >
        A private place for your thoughts
      </h2>
      <p className="max-w-160 text-gray-800/80 md:text-xl text-lg leading-7.5">
        Everything you write is encrypted and stays private, only you can read
        it.
      </p>
      <HeroFooter />
    </main>
  );
}
