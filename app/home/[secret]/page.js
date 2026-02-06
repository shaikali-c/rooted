import Divider from "@/components/divider";
import FadeIn from "@/components/fadein";
import { sec_t } from "@/constants/dummy";
import { ChevronLeft, Cross, X } from "lucide-react";
import Link from "next/link";

export default async function PageSecret({ params }) {
  const { secret } = await params;
  const { date, title, content } = sec_t[secret];
  return (
    <FadeIn>
      <main className="w-full h-full md:p-30 md:pt-25 p-6.5 pt-6 relative pb-20">
        <header className="flex flex-col text-gray-800">
          <Link
            href={"/home"}
            className=" text-gray-700 underline md:hidden w-fit mb-8 flex gap-1 items-center font-semibold rounded-full justify-center ml-auto"
          >
            <X />
          </Link>
          <h2 className="text-xs text-gray-600 mb-2.5 md:mb-3">{date}</h2>
          <h2 className="font-semibold font-diary text-3xl ">{title}</h2>
        </header>
        <p className="whitespace-pre-wrap my-6 text-gray-900 text-base/7">
          {content}
        </p>
      </main>
    </FadeIn>
  );
}
