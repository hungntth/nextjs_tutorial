import React from "react";

export default function Coding() {

  return (
    <div className=" mx-4 mt-4">
      <div className="flex items-center mb-2">
        <div className="border-2 border-gray-400 w-1/3 rounded-md self-stretch flex items-center pl-2">
          <p>Name of project</p>
        </div>
        <div>
          <button className="btn ml-2 bg-white text-gray-500 hover:bg-white border-gray-500 border-2">
            Run
          </button>
        </div>
      </div>
      <div className="flex h-screen">
        <div className="border-2 border-gray-400 h-50 w-1/2 ">
          <select className="select select-bordered focus:outline-none max-w-xs float-right m-2 border-2 border-gray-400">
            <option selected>Python</option>
            <option>Javascript</option>
            <option>Go</option>
            <option>Ruby</option>
          </select>
          box 1
        </div>
        <div
          className="border-gray-800 cursor-col-resize w-1"
          id="dragMe"
        ></div>
        <div className="border-2 border-gray-400 h-50 w-1/2 flex-1">box 2</div>
      </div>
    </div>
  );
}
