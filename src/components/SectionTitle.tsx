import React from "react";
import Image from "next/image";
import { scDream600Font } from "@/data/fonts";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div
      className={`${scDream600Font.className} flex flex-row items-baseline justify-center gap-1 text-[#05AED8]`}
    >
      <Image
        src="/visitor-info/구분기호.svg"
        alt="구분기호"
        width={24}
        height={24}
        quality={100}
      />
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

export default SectionTitle;
