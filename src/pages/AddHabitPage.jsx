import React from "react";
import HabitItem from "../components/HabitItem";
import AddHabitForm from "../components/AddHabitForm";

function AddHabitPage({ isFormVisible, setIsFormVisible }) {
  return (
    <>
      <div className="habit-items h-screen pt-[119px] px-10 grid grid-cols-3 gap-6 content-start">
        <HabitItem />
      </div>
      {isFormVisible && (
        <div className="flex min-h-screen w-screen justify-center items-center border-2 border-b-orange-700">
          <AddHabitForm setIsFormVisible={setIsFormVisible} />
        </div>
      )}
    </>
  );
}

export default AddHabitPage;
