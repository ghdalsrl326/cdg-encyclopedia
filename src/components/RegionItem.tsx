import React from "react";
import Image from "next/image";

type Props = {
  index: string;
  title: string;
};

const RegionItem = ({ index, title }: Props) => {
  return (
    <div className="flex flex-row items-center text-center gap-4">
      <Image
        src={`/visitor-info/Circle${index}.svg`}
        alt={`${index}번 권역`}
        width={20}
        height={20}
        quality={100}
      />
      <h2 className="text-lg">{title}</h2>
    </div>
  );
};

export default RegionItem;
