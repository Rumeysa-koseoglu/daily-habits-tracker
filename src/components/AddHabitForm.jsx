import React, { useState } from "react";

function AddHabitForm({ setIsFormVisible }) {
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
          <div className="flex justify-center w-[380px] border border-black  rounded-full p-4">
            <select>
              <option value="selected">SELECT A TITLE</option>
              <option>CHORES</option>
              <option>STUDY</option>
              <option>PERSONAL DEV.</option>
              <option>EXERCISE</option>
            </select>
          </div>

          <div className="flex flex-col items-center gap-4">
            <label>HABIT CONTENT: </label>
            <input
              type="text"
              placeholder="please enter a habit"
              className="border border-black rounded-full p-4 text-lg outline-none w-[380px]"
            />
          </div>

          <button className="bg-green-600 hover:bg-green-700 hover:ring-2 ring-green-500 text-white p-3 rounded-full w-[390px]">
            save
          </button>
          <button
            className="bg-red-700 hover:bg-red-900 hover:ring-2 ring-red-600 text-white p-3 rounded-full w-[390px]"
            onClick={() => setIsFormVisible(false)}
          >
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHabitForm;
