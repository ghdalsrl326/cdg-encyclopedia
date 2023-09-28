import React from "react";
import GardenSearchButton from "./GardenSearchButton";
import GardenIntroButton from "./GardenIntroButton";

const GardenHelpButtons = () => {
  return (
    <div className="z-10 fixed bottom-20 left-20 flex flex-col gap-4">
      <GardenSearchButton />
      <GardenIntroButton />
    </div>
  );
};

export default GardenHelpButtons;
