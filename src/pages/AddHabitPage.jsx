import React from "react";
import HabitItem from "../components/HabitItem";
import AddHabitForm from "../components/AddHabitForm";

function AddHabitPage({ isForm, setIsForm }) {
  return (
    <>
      <div className="habit-items h-screen pt-[119px] px-10 grid grid-cols-3 gap-6 content-start">
        <HabitItem />
      </div>
      {isForm && (
        <div className="flex min-h-screen w-screen justify-center items-center">
          <AddHabitForm setIsForm={setIsForm} />
        </div>
      )}
    </>
  );
}

export default AddHabitPage;
