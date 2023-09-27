import React from "react";
import { BUILDING } from "@/data/building";
import { scDream300Font, scDream500Font } from "@/data/fonts";

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
