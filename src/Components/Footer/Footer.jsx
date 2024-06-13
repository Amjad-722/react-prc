import React from "react";

export default function Footer(props) {
  return (
    <div className="w-full bg-red-200 my-6  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 py-2 ">
      <div className="p-2 bg-white border-[1px] border-gray-400 rounded-md w-80">
        <h1 className="text-2xl font-bold  text-orange-400">
          {props.data.title}
        </h1>
        <p className="w-72 ">{props.data.description}</p>
      </div>

      <div className="p-2 bg-white border-[1px] border-gray-400 rounded-md w-80">
        <h1 className="text-2xl font-bold  text-orange-400">
          {props.data.title}
        </h1>
        <p className="w-72 ">{props.data.description}</p>
      </div>

      <div className="p-2 bg-white border-[1px] border-gray-400 rounded-md w-80">
        <h1 className="text-2xl font-bold  text-orange-400">
          {props.data.title}
        </h1>
        <p className="w-72 ">{props.data.description}</p>
      </div>
    </div>
  );
}
