import React from "react";

const InputBox = () => {
  return (
    <div>
      <p className="mb-2">From</p>
      <div className="flex gap-5">
        <input
          className="outline-none w-full bg-transparent py-2 border-2 border-gray-600 rounded-md px-3"
          type="number"
          placeholder="0"
        />
        <select
          className="rounded-md px-3 py-2 cursor-pointer outline-none border-2 border-gray-600 bg-transparent "
          name=""
          id=""
        >
          <option className="text-gray-600" value="">
            USD
          </option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;
