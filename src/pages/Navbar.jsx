import { Link } from "react-router-dom";
import { GiSunglasses } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";
function Navbar() {
  return (
    <nav className="grid grid-cols-[130px_150px_auto] p-6 bg-[#232020] text-[22px] text-[#319530]">
      <Link to="/home">Home</Link>
      <Link to="/add-habit">Add Habit</Link>

      <div className="flex items-center justify-end">
        <BsSunglasses className="text-[#260816] text-3xl" />
        {/* <GiSunglasses className="text-[34px] text-[#FCF5EE]" /> */}
      </div>
    </nav>
  );
}

export default Navbar;
