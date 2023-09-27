import React from "react";
import Image from "next/image";
import { scDream600Font } from "@/data/fonts";

const PhotoSpotSubTitle = () => {
  return (
    <div
      className={`${scDream600Font.className} flex flex-col items-center text-center gap-6`}
    >
      <Image
        src={`/visitor-info/포토스팟.svg`}
        alt={`포토스팟`}
        width={54}
        height={54}
        quality={100}
      />
      <h2 className=" text-xl">
        창덕궁의 요소를 활용한 AR 필터를 사용해 사진을 찍어보세요!
      </h2>
    </div>
  );
};

export default PhotoSpotSubTitle;
