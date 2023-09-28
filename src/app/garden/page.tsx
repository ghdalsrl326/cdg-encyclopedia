import { nanumOeHarMeoNiGeurSsiFont } from "@/data/fonts";
import React from "react";
import Image from "next/image";
import GardenHelpButtons from "@/components/GardenHelpButtons";
import Link from "next/link";
import { GARDEN } from "@/data/garden";
import { URL } from "@/data/url";

const page = () => {
  return (
    <section
      className={`${nanumOeHarMeoNiGeurSsiFont.className} relative h-screen flex flex-col justify-between pt-28 pb-12 items-center text-[#FF61D6] px-4 overflow-y-scroll`}
    >
      <Image
        fill
        className="absolute top-0 left-0 z-0 w-full h-full bg-repeat"
        src="/garden/배경.png"
        alt="배경"
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <GardenHelpButtons />
      <Link
        className="z-10 fixed bottom-20 right-20"
        href={`${URL.GARDEN}/${GARDEN[0].path}`}
      >
        <Image
          src={`/garden/시작버튼.png`}
          alt={"시작버튼"}
          width={172}
          height={189}
          quality={100}
        />
      </Link>
    </section>
  );
};

export default page;
