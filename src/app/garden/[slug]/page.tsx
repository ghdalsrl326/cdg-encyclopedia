import { nanumOeHarMeoNiGeurSsiFont } from "@/data/fonts";
import React from "react";
import Image from "next/image";
import GardenLayout from "@/components/GardenLayout";

const page = () => {
  return (
    <section
      className={`${nanumOeHarMeoNiGeurSsiFont.className} relative h-screen flex flex-col justify-center items-center text-black text-2xl overflow-y-scroll`}
    >
      <Image
        fill
        className="absolute top-0 left-0 z-0 w-full h-full bg-repeat"
        src="/garden/배경_설문.png"
        alt="배경_설문"
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <GardenLayout />
    </section>
  );
};

export default page;
