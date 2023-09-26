import React, { useRef, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { PiMinusCircleFill, PiPlusCircleFill } from "react-icons/pi";
import ZoomableImage from "@/components/ZoomableImage";

const yeongdoFont = localFont({
  src: "../fonts/yeongdo.woff2",
  display: "swap",
});

const scDreamFont = localFont({
  src: "../fonts/SCDream1.otf",
  display: "swap",
});

const page = () => {
  return (
    <section
      className={`${scDreamFont.className} relative flex flex-col justify-between px-64 pt-20 pb-12 items-center text-[#FF61D6] overflow-y-scroll`}
    >
      <Image
        fill
        className="absolute top-0 left-0 z-0 w-full h-full"
        src="/visitor-info/배경.png"
        alt="background-image"
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <button
        className={`${yeongdoFont.className} z-0 bg-white rounded-full shadow-lg shadow-[#D3EEF3] w-48 h-12 text-xl`}
        disabled
      >
        지도보기
      </button>
      <ZoomableImage
        src="/visitor-info/지도.png"
        alt="map"
        width={3000}
        height={3080}
        quality={100}
      />
    </section>
  );
};

export default page;
