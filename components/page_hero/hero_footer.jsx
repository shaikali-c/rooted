import PrimaryButton from "../primary_btn";

export default function HeroFooter() {
  return (
    <footer className="mt-2 md:mb-0 mb-30 relative flex items-center flex-col gap-4">
      <PrimaryButton href={"/account-set-up"}>Start Writing</PrimaryButton>
      <p className="text-gray-700 font-geist flex items-center gap-1 text-sm">
        Zero-knowledge By Design
      </p>
    </footer>
  );
}
