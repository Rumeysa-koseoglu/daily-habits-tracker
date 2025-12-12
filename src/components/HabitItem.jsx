import { PiTrashDuotone } from "react-icons/pi";

function HabitItem() {
  return (
    <div className="flex flex-col items-center gap-10 p-6 bg-[#232020] max-w-[480px] h-[200px] max-h-[250px] rounded-xl text-[#FF7315] text-[18px]">
      {/* CHECK, HABIT TITLE, AND DELETE ICON */}
      <div className="w-full flex flex-row items-center justify-between">
        <input
          type="checkbox"
          className="w-5 h-5 rounded-2xl accent-green-600 bg-[#232020] "
        />
        <select className="text-[#9d4bc3]">
          <option>CHORES</option>
          <option>STUDY</option>
          <option>PERSONAL DEV.</option>
          <option>EXERCISE</option>
        </select>

        <PiTrashDuotone className="col-start-10 w-7 h-7 ml-2.5 text-[#9d4bc3]" />
      </div>

      {/* HABIT CONTENT */}

      <p className="text-center underline">read book at least 20 pages</p>
    </div>
  );
}

export default HabitItem;
