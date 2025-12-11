import React from "react";
import HabitItem from "../components/HabitItem";
import AddHabitForm from "../components/AddHabitForm";

function AddHabitPage({ isForm, setIsForm }) {
  return (
    <div>
      <HabitItem />
      {isForm && <AddHabitForm setIsForm={setIsForm} />}
    </div>
  );
}

export default AddHabitPage;
