import SecretContent from "@/components/page_home/secret";
import SecretHeading from "@/components/page_home/secret_heading";

export default function PageHome() {
  return (
    <div className="hidden md:flex">
      <main className="flex flex-col gap-4">
        <p className="text-xs text-neutral-600">Friday 29, Jan</p>
        <SecretHeading>
          It was the best night with her best night with her.
        </SecretHeading>
        <SecretContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SecretContent>
      </main>
    </div>
  );
}
