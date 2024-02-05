import React, { useRef } from "react";
import cn from "utlis/cn";

const DropDownList = React.forwardRef<
  HTMLUListElement,
  { isDropDownOpen: boolean }
>(({ isDropDownOpen, children }, ref) => {
  const dropDownActiveClass = isDropDownOpen ? "max-h-60 ring-1" : "w-0";

  return (
    <ul
      ref={ref}
      className={cn(
        `absolute z-10 mt-2 rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none overflow-y-auto ${dropDownActiveClass} flex flex-col`,
      )}
    >
      {children}
    </ul>
  );
});

export default DropDownList;
