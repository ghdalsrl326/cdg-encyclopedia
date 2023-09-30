import React from "react";
import Image from "next/image";
import GardenSearchButton from "./GardenSearchButton";
import GardenIntroButton from "./GardenIntroButton";
import Link from "next/link";
import { GARDEN } from "@/data/garden";
import { URL } from "@/data/url";

const GardenHelpButtons = () => {
  return (
    <div className="z-10 fixed w-10/12 bottom-20 flex flex-col-reverse items-end gap-4 sm:flex-row justify-between">
      <div className="z-10 flex flex-col gap-4">
        <GardenSearchButton />
        <GardenIntroButton />
      </div>
      <div>
        <Link className="z-10" href={`${URL.GARDEN}/${GARDEN[0].path}`}>
          <Image
            src={`/garden/시작버튼.png`}
            alt={"시작버튼"}
            width={172}
            height={189}
            quality={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default GardenHelpButtons;
