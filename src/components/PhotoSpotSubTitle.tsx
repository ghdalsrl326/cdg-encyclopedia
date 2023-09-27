import React from "react";
import Image from "next/image";
import { scDream400Font } from "@/data/fonts";

const PhotoSpotSubTitle = () => {
  return (
    <div className={scDream400Font.className}>
      <Image
        src={`/visitor-info/포토스팟.svg`}
        alt={`포토스팟`}
        width={54}
        height={54}
        quality={100}
      />
      <h2>창덕궁의 요소를 활용한 AR 필터를 사용해 사진을 찍어보세요!</h2>
    </div>
  );
};

export default PhotoSpotSubTitle;
