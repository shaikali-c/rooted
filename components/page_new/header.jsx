import CDate from "./date";
import DropDownWrapper from "./dropdown_wrapper";
import CTitle from "./main_title";

export default function CHeader() {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between items-center mb-15 font-main pb-2">
        <div className="flex items-center gap-2">
          <CDate />
        </div>
        <DropDownWrapper />
      </div>
      <CTitle />
    </header>
  );
}
