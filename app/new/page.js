import { Smile } from "lucide-react";
import DropDownWrapper from "@/components/page_new/dropdown_wrapper";
import CTextArea from "@/components/page_new/main_textarea";
import CTitle from "@/components/page_new/main_title";
import CDate from "@/components/page_new/date";
import CHelpers from "@/components/page_new/helpers";
import CHeader from "@/components/page_new/header";

export default function PageNew() {
  return (
    <main
      className={`w-screen h-dvh flex items-center justify-center bg-[#f6f5f2] text-neutral-900 relative font-diary`}
    >
      <div className="w-full max-w-5xl h-full md:rounded-xl flex flex-col md:p-15 p-6 py-10 gap-2">
        <CHeader />
        <CTextArea />
        <CHelpers />
      </div>
    </main>
  );
}
