import React from "react";
import Dropdown from "./Dropdown/DropdownPrice";
import DropdownCategory from "./Dropdown/DropdownCategory";

const FilterNavigation = ({
  handleCheck,
  handlePrice,
  handleCategory,
  handleReset,
}) => {
  return (
    <>
      <div className="flex justify-between items-center border-y-2 my-4">
        <div className="flex items-center gap-4">
          <p>Filter By:</p>
          <button className="flex items-center border-b gap-2 h-10 text-gray-500">
            <input
              type="checkbox"
              id="scales"
              name="scales"
              onClick={handleCheck}
            />
            <label htmlFor="scales">Open Now</label>
          </button>
          <Dropdown handlePrice={handlePrice} />
          <DropdownCategory handleCategory={handleCategory} />
        </div>
        <button
          className="border-2 px-6 py-1 rounded-sm md:px-4"
          onClick={handleReset}
        >
          CLEAR ALL
        </button>
      </div>
    </>
  );
};

export default FilterNavigation;
