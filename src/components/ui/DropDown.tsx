import React, { useRef, useState } from "react";
import DropDownList from "./DropDownList";
import useOutSideToClose from "hooks/useOutSideToClose";

const DropDown = ({ children, selectedItem }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const menuRef = useRef<HTMLUListElement | null>(null);

  const dropDownBtnRef = useRef<HTMLDivElement | null>(null);

  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };

  useOutSideToClose(menuRef, dropDownBtnRef, closeDropDown);

  return (
    <div className="text-left inline-block" ref={dropDownBtnRef}>
      <button
        onClick={toggleDropDown}
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedItem}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <DropDownList
        isDropDownOpen={isDropDownOpen}
        ref={menuRef}
        ondropDownSelect
        itemList
      >
        {children}
      </DropDownList>
    </div>
  );
};

export default DropDown;

//   <!--
//     Dropdown menu, show/hide based on menu state.

//     Entering: "transition ease-out duration-100"
//       From: "transform opacity-0 scale-95"
//       To: "transform opacity-100 scale-100"
//     Leaving: "transition ease-in duration-75"
//       From: "transform opacity-100 scale-100"
//       To: "transform opacity-0 scale-95"
//   -->
