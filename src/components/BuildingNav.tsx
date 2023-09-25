"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { BUILDING } from "@/data/constant";
import { usePathname } from "next/navigation";

const scDream400Font = localFont({
  src: "../app/fonts/SCDream4.otf",
  display: "swap",
});

const BuildingNav = () => {
  const path = usePathname();

  return (
    <nav className="z-10 px-4 py-4 sm:px-8">
      <div className="py-2 sm:py-4">
        <Link
          className="flex flex-row items-center gap-2 sm:gap-4"
          href={"/building-info"}
        >
          <Image
            className="z-10"
            src={"/building-info/doubleBackIcon.svg"}
            alt={"창덕궁_둘러보기_연결"}
            width={18}
            height={18}
            quality={100}
          />
          <span className="text-sm sm:text-base">창덕궁 둘러보기</span>
        </Link>
      </div>
      <div className={`${scDream400Font.className} text-center`}>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {Array.from(BUILDING).map((building) => (
            <Link
              key={building.path}
              className={`w-16 sm:w-24 rounded-full border-[#FF64DE] border-2 px-2 sm:px-4 py-1 text-xs sm:text-base 
              ${
                path === `/building-info/${building.path}`
                  ? "bg-[#FF64DE] text-white"
                  : "hover:bg-[#FFDAF7]"
              }`}
              href={`/building-info/${building.path}`}
            >
              {building.id}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BuildingNav;
