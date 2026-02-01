import DropDown from "@/components/_ext/dropdown";
import Divider from "@/components/divider";
import Entry from "@/components/entries/entry";
import MainLogo from "@/components/main_logo";
import CDate from "@/components/page_new/date";

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
      <section className="w-full grid md:grid-cols-[36%_63%] max-w-7xl h-full">
        <div className="md:border-r border-neutral-300 md:px-3 px-4.5 md:pr-5 flex flex-col gap-5 h-full no-scrollbar max-h-dvh overflow-y-auto md:pt-25 pt-10 mask-[linear-gradient(to_bottom,#f8f8f8_70%,transparent_100%)] md:pb-55 pb-25 sticky left-0">
          <header className="flex items-center w-full justify-between mb-3">
            <MainLogo />
            <DropDown />
          </header>
          <input
            type="text"
            placeholder="Search your entries"
            className="outline-0 border-neutral-200 md:border-neutral-200 border py-2.5 rounded-md px-4 focus:outline-2 outline-accent"
          ></input>
          <div className="flex flex-col gap-8">
            <Entry data={entries[0]} />
            <Entry data={entries[0]} active={true} />
            <Entry data={entries[0]} />
            <Entry data={entries[0]} />
            <Entry data={entries[0]} />
          </div>
          <Divider />
        </div>
        <div className="bg-neutral-100 p-25 pt-25.5 md:flex flex-col max-h-dvh overflow-y-auto no-scrollbar hidden gap-8">
          <header className="flex flex-col gap-8">
            <CDate />
            <h2 className="font-semibold text-3xl text-neutral-800 font-diary">
              The day I went to talk to her.
            </h2>
          </header>
          <section className=" text-gray-800 flex flex-col gap-6 leading-7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
