import React from "react";
import Image from "next/image";
import BuildingGrid from "@/components/BuildingGrid";

const page = () => {
  return (
    <section
      className="relative flex flex-col justify-between pt-28 pb-12 items-center text-[#FF61D6] px-4 overflow-y-scroll"
      style={{
        backgroundImage: "url(/building-info/background.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-xl z-10">건물을 눌러 정보를 확인하세요!</h1>
      <Image
        className="fixed bottom-0 left-0 z-20 w-full"
        src="/building-info/backgroundFooter.png"
        alt="background-footer"
        style={{ position: "fixed", height: "10%", objectFit: "cover" }}
        quality={100}
        width={3060}
        height={164}
      />
      <BuildingGrid />
      <button
        className="fixed bottom-20 z-20 bg-white rounded-full shadow-lg shadow-[#D3EEF3] w-48 h-12 text-xl"
        disabled
      >
        창덕궁 둘러보기
      </button>
    </section>
  );
};

export default page;
