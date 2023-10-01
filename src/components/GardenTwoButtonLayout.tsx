import React from "react";
import Image from "next/image";

type Props = {
  question: string;
  onYes: () => void;
  onNo: () => void;
};

const GardenTwoButtonLayout = ({ question, onYes, onNo }: Props) => {
  return (
    <div className="flex flex-col justify-around items-center bg-white w-full h-1/2 z-10 relative">
      <div className="absolute -inset-10 z-0">
        <Image
          fill
          src={`/garden/편지지.png`}
          alt="편지지"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="z-0"
        />
      </div>
      <Image
        className="z-10"
        src={`/garden/편지지나무.png`}
        alt={`편지지나무`}
        width={60}
        height={72}
        quality={100}
      />
      <p className="z-10">{question}</p>
      <div className="w-10/12 flex flex-row justify-between">
        <button onClick={onNo} className="z-10 focus:outline-none">
          <Image
            src={`/garden/noButton.svg`}
            alt={`noButton`}
            width={64}
            height={64}
            quality={100}
          />
        </button>
        <button onClick={onYes} className="z-10 focus:outline-none">
          <Image
            src={`/garden/yesButton.svg`}
            alt={`yesButton`}
            width={64}
            height={64}
            quality={100}
          />
        </button>
      </div>
    </div>
  );
};

export default GardenTwoButtonLayout;
