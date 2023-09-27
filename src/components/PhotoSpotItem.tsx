import React from "react";
import Image from "next/image";

type Props = {
  title: string;
};

const PhotoSpotItem = ({ title }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image
        src={`/visitor-info/${title}_포토스팟.png`}
        alt={`${title}_포토스팟`}
        width={100}
        height={100}
        quality={100}
      />
      <h2 className="text-lg">({title})</h2>
    </div>
  );
};

export default PhotoSpotItem;
