import React, { useState, useEffect } from "react";

// Components
import Drawer from "./Drawer";

export default function Navbar() {
  // STATE
  const [navActive, setNavActive] = useState(false);

  // FUNCTION
  const changeNav = () => {
    window.scrollY >= 30 ? setNavActive(true) : setNavActive(false);
  };

  // USEEFFECT
  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  return (
    <nav
      className={`w-[100vw] fixed z-1 h-[5rem] text-white`}
      style={{ backgroundColor: navActive ? "#27391C" : "#255F38" }}
    >
      <div className="flex justify-between items-center py-[1rem] px-[3rem]">
        <h3 className="font-bold text-xl">Dashboard</h3>

        <Drawer />
      </div>
    </nav>
  );
}
