import { Link } from "react-router-dom";
import { GiSunglasses } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
import { LuFilePlus2 } from "react-icons/lu";
import { useState } from "react";
function Navbar() {
  const [isAddHabitPage, setIsAddHabitPage] = useState(false);
  console.log(isAddHabitPage);

  return (
    <nav className="grid grid-cols-9 p-6 items-center bg-[#232020] text-[22px] text-[#319530]">
      {isAddHabitPage ? (
        <>
          <Link to="/home" onClick={() => setIsAddHabitPage(false)}>
            Home
          </Link>
          <Link to="/add-habit" onClick={() => setIsAddHabitPage(true)}>
            Add Habit
          </Link>

          <div className="flex items-center justify-around col-start-9">
            <LuFilePlus2 className="w-8 h-8" />
            <BsSunglasses className="text-[#0d0709] text-3xl" />
            {/* <GiSunglasses className="text-[34px] text-[#FCF5EE]" /> */}
          </div>
        </>
      ) : (
        <>
          <Link to="/home" onClick={() => setIsAddHabitPage(false)}>
            Home
          </Link>
          <Link to="/add-habit" onClick={() => setIsAddHabitPage(true)}>
            Add Habit
          </Link>

          <div className="flex items-center justify-end col-start-9">
            <BsSunglasses className="text-[#0d0709] text-3xl mr-[21.5px]" />
            {/* <GiSunglasses className="text-[34px] text-[#FCF5EE]" /> */}
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
