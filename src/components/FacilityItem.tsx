import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

const FacilityItem = ({ src, title }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Image
        src={`/visitor-info/${src}.svg`}
        alt={src}
        width={28}
        height={28}
        quality={100}
      />
      <h2 className="text-lg">{title}</h2>
    </div>
  );
};

export default FacilityItem;
