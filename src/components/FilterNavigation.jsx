import React from "react";

const FilterNavigation = ({handleCheck}) => {
  return (
    <>
      <div className="flex justify-between items-center border-y-2 py-4 my-4">
        <div className="flex gap-4">
          <p>Filter By:</p>
          <button className="flex items-center border-b-2 gap-2">
            <input type="checkbox" id="scales" name="scales" onClick={handleCheck} />
            <label htmlFor="scales">Open Now</label>
          </button>
          <button className="border-b-2">Price</button>
          <button className="border-b-2">Categories</button>
        </div>
        <button className="border-2 px-6 py-1 rounded-sm md:px-4">
          CLEAR ALL
        </button>
      </div>
    </>
  );
};

export default FilterNavigation;
