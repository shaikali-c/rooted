"use client";
import { Divider } from "../_ext/catalyst/divider";
import Entry from "../entries/entry";
import MainLogo from "../main_logo";
import { useParams } from "next/navigation";
import DropDownWrapper from "../page_new/dropdown_wrapper";
import { home_dd } from "@/constants/dropdowns";

export default function SecretSidebar({ secrets }) {
  const { secret } = useParams();
  return (
    <div
      className={`md:px-3 px-4.5 md:pr-5 flex flex-col gap-5 h-full no-scrollbar max-h-dvh overflow-y-auto md:pt-15 pt-10 mask-[linear-gradient(to_bottom,#f8f8f8_70%,transparent_100%)] md:pb-55 pb-25 sticky left-0`}
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
        {secrets.map((elem, index) => {
          const pure_data = JSON.parse(elem.content);
          const active = pure_data.uid === secret;
          return (
            <Entry
              data={pure_data}
              key={pure_data.uid}
              id={pure_data.uid}
              active={active}
            />
          );
        })}
      </div>
      <Divider />
    </div>
  );
}
