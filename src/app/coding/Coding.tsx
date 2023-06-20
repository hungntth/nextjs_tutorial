"use client";
import Selector from "@/src/components/Selector";
import React from "react";
export default function Coding() {
  if (typeof document !== "undefined") {
    // Query the element
    const resizer = document.getElementById("dragMe") as HTMLElement;
    const leftSide = resizer.previousElementSibling as HTMLElement;
    const rightSide = resizer.nextElementSibling as HTMLElement;

    // The current position of mouse
    let x = 0;
    let y = 0;
    let leftWidth = 0;
    // Handle the mousedown event
    // that's triggered when user drags the resizer
    const mouseDownHandler = (e: MouseEvent) => {
      // Get the current mouse position
      x = e.clientX;
      y = e.clientY;
      leftWidth = leftSide.getBoundingClientRect().width;

      // Attach the listeners to `document`
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      // How far the mouse has been moved
      const dx = e.clientX - x;
      const dy = e.clientY - y;

      const newLeftWidth =
        ((leftWidth + dx) * 100) /
        (resizer.parentNode as HTMLElement).getBoundingClientRect().width;
      leftSide.style.width = `${newLeftWidth}%`;

      resizer.style.cursor = "col-resize";
      document.body.style.cursor = "col-resize";

      leftSide.style.userSelect = "none";
      leftSide.style.pointerEvents = "none";

      rightSide.style.userSelect = "none";
      rightSide.style.pointerEvents = "none";
    };

    const mouseUpHandler = () => {
      resizer.style.removeProperty("cursor");
      document.body.style.removeProperty("cursor");

      leftSide.style.removeProperty("user-select");
      leftSide.style.removeProperty("pointer-events");

      rightSide.style.removeProperty("user-select");
      rightSide.style.removeProperty("pointer-events");

      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    // Attach the handler
    resizer.addEventListener("mousedown", mouseDownHandler);
  }
  return (
    <div className=" mx-4 mt-16">
      <div className="flex h-screen">
        <div className="border-2 border-gray-500 h-50 relative w-1/2 ">
          <div className="flex items-center mb-2 absolute right-0 left-0 -top-12 whitespace-nowrap">
            <div className="border-2 border-gray-400 flex-1 rounded-md self-stretch flex items-center pl-2">
              <p>Name of project</p>
            </div>
            <div>
              <button className="btn-sm ml-1 bg-white text-gray-600 hover:bg-gray-200 border-gray-500 border-2 rounded px-8 my-1">
                Run
              </button>
            </div>
          </div>
          <select
            defaultValue="option1"
            className="select select-ghost select-bordered focus:outline-none max-w-xs float-right m-2 border-2 border-gray-400"
          >
            <option value="option1"> Python</option>
            <option value="option2">Javascript</option>
            <option value="option3">Go</option>
            <option value="option4">Ruby</option>
          </select>
          box 1
        </div>
        <div
          className="border-gray-800 cursor-col-resize w-1"
          id="dragMe"
        ></div>
        <div className="border-2 border-gray-500 h-50 w-1/2 flex-1">box 2</div>
      </div>
    </div>
  );
}
