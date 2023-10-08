import { nanumOeHarMeoNiGeurSsiFont } from "@/data/fonts";
import React from "react";
import GardenHelpButtons from "@/components/GardenHelpButtons";
import Trees from "@/components/Trees";

const page = async () => {
  return (
    <section
      className={`${nanumOeHarMeoNiGeurSsiFont.className} relative h-screen flex flex-col justify-between pt-28 pb-12 items-center text-[#FF61D6] px-4 overflow-y-scroll`}
      style={{
        backgroundImage: "url(/garden/배경.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Trees />
      <GardenHelpButtons />
    </section>
  );
};

export default page;
