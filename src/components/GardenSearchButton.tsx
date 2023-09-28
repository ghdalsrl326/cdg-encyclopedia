import { notoSansKRFont } from "@/data/fonts";
import React from "react";
import Image from "next/image";

const GardenSearchButton = () => {
  return (
    <button
      className={`${notoSansKRFont.className} flex flex-row justify-center items-center gap-2 bg-white text-black rounded-full border border-black px-2 py-1 text-lg font-bold`}
    >
      <Image
        src={`/garden/검색버튼.svg`}
        alt={"검색버튼"}
        width={18}
        height={18}
        quality={100}
      />
      소원나무 찾기
    </button>
  );
};

export default GardenSearchButton;
