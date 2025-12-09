import React, { useState } from "react";

function AddHabitForm() {
  return (
    <div
      id="addHabitForm"
      className="max-w-[500px] h-[470px] p-13 bg-[#232020] text-[#756d6d] rounded-4xl"
    >
      <form
        method="dialog"
        className="flex flex-col gap-14 box-content items-center justify-center"
      >
        <div className="flex flex-col items-center gap-4">
          <label className=""> HABIT TITLE: </label>
        </div>
      </form>
    </div>
  );
}

export default AddHabitForm;
