import React from "react";

export const Tag = () => {
  return (
    <>
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs rounded-lg drop-shadow-lg shadow-inner"
        />
      </div>

      <div>
        {/* Upper side  */}
        <div className="flex justify-end mb-4">
          <button className="btn">Walloop</button>
        </div>

        <div className=" rounded-lg bg-secondary-focus h-9"></div>
      </div>
    </>
  );
};
