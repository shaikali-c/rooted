"use client";
import Divider from "@/components/divider";
import Entry from "@/components/entries/entry";
import MainLogo from "@/components/main_logo";
import DropDownWrapper from "@/components/page_new/dropdown_wrapper";
import { sec_t } from "@/constants/dummy";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { home_dd } from "@/constants/dropdowns";

export default function HomeLayout({ children, list }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const entryOpened = segments.length > 1;

  const [activeEnt, setActiveEnt] = useState(Object.keys(sec_t)[0]);
  return (
    <main className="w-screen flex justify-center min-h-screen bg-neutral-100 text-gray-900 font-main">
      <section className="w-full grid md:grid-cols-[36%_63%] gap-10 max-w-7xl h-full">
        <div
          className={`${entryOpened ? "hidden md:flex" : ""} md:px-3 px-4.5 md:pr-5 flex flex-col gap-5 h-full no-scrollbar max-h-dvh overflow-y-auto md:pt-15 pt-10 mask-[linear-gradient(to_bottom,#f8f8f8_70%,transparent_100%)] md:pb-55 pb-25 sticky left-0`}
        >
          <header className="flex items-center w-full justify-between mb-3">
            <MainLogo />
            <DropDownWrapper list={home_dd} />
          </header>
          <input
            type="text"
            placeholder="Search your entries"
            className="outline-0 border-neutral-200 md:border-neutral-200 border py-2.5 rounded-md px-4 focus:outline-2 outline-accent"
          ></input>
          <div className="flex flex-col gap-8">
            {Object.entries(sec_t).map(([key, note]) => (
              <Entry
                data={note}
                key={key}
                id={key}
                active={key === activeEnt}
                setActiveEnt={setActiveEnt}
              />
            ))}
          </div>
          <Divider />
        </div>
        {children}
      </section>
    </main>
  );
}
