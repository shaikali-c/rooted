import DropDown from "@/components/_ext/dropdown";
import Entry from "@/components/entries/entry";
import MainLogo from "@/components/main_logo";
import CDate from "@/components/page_new/date";
import { Ellipsis, Search } from "lucide-react";

const entries = [
  {
    date: "Saturday, Oct 28",
    title: "She told me I was wrong, unromatic, but little she doesn't know",
    content:
      "Like we have just seen in the previous example, a value can be stored in a variable. And if you run the example code above, you see how a variable is printed.",
  },
];

export default function HomeSideBar() {
  return (
    <main className="w-screen flex justify-center min-h-screen bg-neutral-100 text-gray-900 font-main">
      <section className="w-full grid grid-cols-[35%_65%] max-w-7xl h-full">
        <div className="border-r border-neutral-300 px-3 pr-5 flex flex-col gap-5 h-full max-h-dvh overflow-y-auto pt-25 mask-[linear-gradient(to_bottom,#000_70%,transparent_100%)]">
          <header className="flex items-center w-full justify-between mb-3">
            <MainLogo />
            <DropDown />
          </header>
          <input
            type="text"
            placeholder="Search your entries"
            className="outline-0 border-neutral-300 border py-2.5 rounded-md px-4 focus:border-accent"
          ></input>
          <Entry data={entries[0]} />
          <Entry data={entries[0]} />
          <Entry data={entries[0]} />
          <Entry data={entries[0]} />
          <Entry data={entries[0]} />
        </div>
        <div className="bg-neutral-100 p-25 flex flex-col">
          <header className="flex flex-col gap-4">
            <CDate />
            <h2 className="font-semibold text-3xl text-neutral-800 mt-6.5 font-diary">
              The day I went to talk to her.
            </h2>
          </header>
          <section className="mt-3 text-gray-800 flex flex-col gap-6 leading-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
