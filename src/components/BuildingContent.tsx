import React from "react";
import localFont from "next/font/local";
import { BUILDING } from "@/data/building";

const scDream300Font = localFont({
  src: "../app/fonts/SCDream3.otf",
  display: "swap",
});

const scDream500Font = localFont({
  src: "../app/fonts/SCDream5.otf",
  display: "swap",
});

type Props = {
  slug: string;
};

const BuildingContent = ({ slug }: Props) => {
  return (
    <>
      <h1 className={scDream500Font.className}>
        {BUILDING.find((building) => building.path === slug)?.title}
      </h1>
      <p className={scDream300Font.className}>
        {BUILDING.find((building) => building.path === slug)?.description}
      </p>
    </>
  );
};

export default BuildingContent;
