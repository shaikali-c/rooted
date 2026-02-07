import { new_dd } from "@/constants/dropdowns";
import CDate from "./date";
import DropDownWrapper from "./dropdown_wrapper";
import CTitle from "./main_title";

export default function CHeader({ title, setTitle }) {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between items-center mb-15 font-main pb-2">
        <div className="flex items-center gap-2">
          <CDate />
        </div>
        <DropDownWrapper list={new_dd} />
      </div>
      <CTitle title={title} setTitle={setTitle} />
    </header>
  );
}
