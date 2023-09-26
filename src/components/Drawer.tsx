"use client";
import React from "react";
import Image from "next/image";
import { URL } from "@/data/url";
import { GARDEN } from "@/data/garden";
import { VISITORINFO } from "@/data/visitorinfo";
import { BUILDING } from "@/data/building";
import DisclosureItem from "./DisclosureItem";
import localFont from "next/font/local";
import Link from "next/link";

const scDream500Font = localFont({
  src: "../app/fonts/SCDream5.otf",
  display: "swap",
});

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <div className={scDream500Font.className}>
      {isOpen && (
        <div
          className="z-30 fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        />
      )}
      <div
        className={`z-30 fixed top-0 right-0 overflow-y-scroll h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full px-4 pt-6">
          <Link
            href={URL.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-end w-full px-4 mb-4"
          >
            <Image
              className="z-30"
              src={"/instagram.svg"}
              alt={"창덕하게_인스타그램_연결"}
              width={30}
              height={30}
              quality={100}
            />
          </Link>
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 flex flex-col gap-4">
            <DisclosureItem
              title="지도보기"
              items={Array.from(VISITORINFO)}
              openImageSrc="/mapSelected.svg"
              closeImageSrc="/map.svg"
              urlPrefix={URL.VISITOR_INFO}
            />
            <DisclosureItem
              title="창덕궁 둘러보기"
              items={Array.from(BUILDING)}
              openImageSrc="/bookSelected.svg"
              closeImageSrc="/book.svg"
              urlPrefix={URL.BUILDING_INFO}
            />
            <DisclosureItem
              title="후원의숲"
              items={Array.from(GARDEN)}
              openImageSrc="/treeSelected.svg"
              closeImageSrc="/tree.svg"
              urlPrefix={URL.GARDEN}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
