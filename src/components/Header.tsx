"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import Drawer from "./Drawer";

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const handleBackButton = () => {
    router.back();
  };

  return (
    path !== "/" && (
      <header className="fixed top-0 w-full z-50 bg-white bg-opacity-50 text-[#FF61D6] ">
        <div className="flex h-10 justify-between px-6 items-center">
          <button className="" onClick={handleBackButton}>
            <MdArrowBackIos size={24} />
          </button>
          <h1 className="text-2xl">창덕도감</h1>
          <button className="" onClick={handleDrawer}>
            <FiMenu size={24} />
          </button>
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={handleDrawer} />
      </header>
    )
  );
};

export default Header;
