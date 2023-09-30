import React from "react";
import Image from "next/image";

type Props = {
  onNext: () => void;
  children: React.ReactNode;
};

const GardenNextButtonLayout = ({ children, onNext }: Props) => {
  return (
    <div className="flex flex-col justify-around items-center bg-white w-full h-1/2 z-10">
      {children}
      <button onClick={onNext} className="z-10 focus:outline-none">
        <Image
          src={`/garden/nextButton.svg`}
          alt={`nextButton`}
          width={64}
          height={64}
          quality={100}
        />
      </button>
    </div>
  );
};

export default GardenNextButtonLayout;
