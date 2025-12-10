import React from "react";
import HabitItem from "../components/HabitItem";
import AddHabitForm from "../components/AddHabitForm";

function AddHabitPage({ isForm }) {
  return (
    <div>
      <HabitItem />
      {isForm && <AddHabitForm />}
    </div>
  );
}

export default AddHabitPage;
