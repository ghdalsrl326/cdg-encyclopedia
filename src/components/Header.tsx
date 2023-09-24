"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
// import NavLinks from "./NavLinks";
// import Logo from "./Logo";
// import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="relative bg-black">
      <div className="flex justify-between items-center gap-x-4 md:gap-x-28 px-4 md:px-28 py-2 md:py-5 overflow-x-auto">
        nav bar
        {/* <Logo
          className="w-[204px] h-[41px] relative inline-block"
          src={IMAGE.MAIN_LOGO}
          width={204}
          height={41}
        />
        <NavLinks className="hidden md:inline-flex text-xl text-white gap-20" />
        <button className="md:hidden p-2 text-white" onClick={handleDrawer}>
          <FiMenu size={24} />
        </button> */}
      </div>
      {/* <Drawer isOpen={isDrawerOpen} onClose={handleDrawer} /> */}
    </header>
  );
};

export default Header;
