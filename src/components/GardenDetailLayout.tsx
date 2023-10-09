import React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  result: string;
};

const GardenDetailLayout = ({ children, result }: Props) => {
  return (
    <div className="flex flex-col justify-around items-center bg-white border border-[#989898] w-11/12 h-3/4 leading-4 px-8 py-24 z-10">
      <Image
        className="z-10 border-4 border-[#A3CA7B]"
        src={`/garden/${result}.jpeg`}
        alt={`${result}`}
        width={280}
        height={280}
        quality={100}
      />
      {children}
    </div>
  );
};

export default GardenDetailLayout;
