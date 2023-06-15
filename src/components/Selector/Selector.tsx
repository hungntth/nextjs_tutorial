import React from "react";

export default function Selector() {
  return (
    <div>
      <select
        defaultValue="option1"
        className="select select-bordered focus:outline-none max-w-xs float-right m-2 border-2 border-gray-400"
      >
        <option value="option1">Python</option>
        <option value="option2">Javascript</option>
        <option value="option3">Go</option>
        <option value="option4">Ruby</option>
      </select>
    </div>
  );
}
