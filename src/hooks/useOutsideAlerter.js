import { useEffect, useState } from "react";
function useOutsideAlerter(ref) {
  const [outsideClicked, setOutSideClicked] = useState(false);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutSideClicked(true);
      } else setOutSideClicked(false);
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return outsideClicked;
}
export default useOutsideAlerter;
