import CDate from "@/components/page_new/date";
import SideBar from "@/components/sidebar_c";

export default function HomeSideBar() {
  return (
    <main className="w-screen flex justify-center min-h-screen bg-neutral-100 text-gray-900 font-main">
      <section className="w-full grid grid-cols-[30%_70%] max-w-7xl">
        <div className="border-r border-neutral-300 px-3 pr-5 flex flex-col gap-5 max-h-xl overflow-y-hidden pt-25">
          <button className="bg-neutral-200 py-2.5 font-semibold rounded-md text-gray-900 hover:bg-accent hover:text-white border border-neutral-300/70">
            Create entry
          </button>
          <div className="w-full p-5 bg-neutral-100 text-neutral-700 rounded-md flex flex-col gap-1 border border-neutral-300">
            <header className="font-diary">
              <CDate />
              <h2 className="font-semibold text-xl text-neutral-800 mt-3">
                The day I went to talk to her so when I went to change the hall.
              </h2>
            </header>
          </div>
          <div className="w-full p-5 bg-neutral-100 text-neutral-700 rounded-md flex flex-col gap-1 border border-neutral-300">
            <header className="font-diary">
              <CDate />
              <h2 className="font-semibold text-xl text-neutral-800 mt-3">
                The day I went to talk to her so when I went to change the hall.
              </h2>
            </header>
          </div>
        </div>
        <div className="bg-neutral-100 p-25">
          <header className="flex flex-col gap-2">
            <CDate />
            <h2 className="font-semibold text-3xl text-neutral-800 mt-5 font-diary">
              The day I went to talk to her.
            </h2>
          </header>
          <section className="mt-3 text-gray-800 flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
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
