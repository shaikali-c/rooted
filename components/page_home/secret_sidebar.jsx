"use client";
import DropDownWrapper from "@/components/page_new/dropdown_wrapper";
import { home_dd } from "@/constants/dropdowns";
import SecretCard from "@/components/_base_entry";
import MainLogo from "@/components/main_logo";
import { usePathname } from "next/navigation";
import Divider from "../divider";

export default function SecretSidebar({ secrets }) {
  const pathname = usePathname();
  const isDetail = pathname.split("/").length > 2;

  return (
    <div
      className={`h-full max-h-dvh mask-[linear-gradient(to_bottom,#f8f8f8_70%,transparent_100%)] ${isDetail ? "md:grid hidden" : "grid"} grid-rows-[135px_1fr]`}
    >
      <div className="flex flex-col gap-5">
        <header className="flex items-center justify-between pt-7">
          <MainLogo />
          <DropDownWrapper list={home_dd} />
        </header>
        <input
          type="text"
          placeholder="Search your diary"
          className="py-2.5 px-4 focus:border-accent/80 outline-0 border w-full rounded-md border-neutral-200"
        ></input>
      </div>
      <section className="flex flex-col md:gap-10 gap-6 pt-5 h-full overflow-y-auto no-scrollbar pb-40">
        {secrets.map((elem) => {
          const parse = JSON.parse(elem.content);
          return (
            <SecretCard
              data={parse}
              key={parse.uid}
              active={pathname.split("/")[2] === parse.uid}
            />
          );
        })}
        <Divider />
      </section>
    </div>
  );
}
