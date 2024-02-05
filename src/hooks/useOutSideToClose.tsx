import React, { useRef, useEffect } from "react";

const useOutSideToClose = (
  ref: React.RefObject<HTMLElement>,
  triggerRef: React.RefObject<HTMLElement>,
  eventOnclick: () => void,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        eventOnclick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default useOutSideToClose;
