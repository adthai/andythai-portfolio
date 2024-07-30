import { useEffect } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpened }) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpened(open => {
          if (open && document.documentElement.clientWidth <= 640) {
            return false;
          }
          return open;
        });
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setMenuOpened]);

  // Ensure that the event listener is bound/unbound whenever menuRef or setMenuOpened changes
}