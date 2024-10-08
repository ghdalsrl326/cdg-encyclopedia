import React from "react";
import Image from "next/image";
import Link from "next/link";

const BuildingGrid = () => {
  return (
    <div className="grid grid-cols-1 justify-center md:grid-cols-4 md:grid-rows-3 gap-4 z-10">
      <Link href={`/building-info/${encodeURIComponent("돈화문")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/돈화문.svg"
            alt="돈화문"
            quality={100}
            width={200}
            height={204}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("인정전")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/인정전.svg"
            alt="인정전"
            quality={100}
            width={250}
            height={242}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("선정전")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/선정전.svg"
            alt="선정전"
            quality={100}
            width={280}
            height={218}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("희정당")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/희정당.svg"
            alt="희정당"
            quality={100}
            width={280}
            height={229}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("대조전")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/대조전.svg"
            alt="대조전"
            quality={100}
            width={280}
            height={145}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("성정각")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/성정각.svg"
            alt="성정각"
            quality={100}
            width={250}
            height={223}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("낙선재")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/낙선재.svg"
            alt="낙선재"
            quality={100}
            width={280}
            height={129}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("부용정")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/부용정.svg"
            alt="부용정"
            quality={100}
            width={280}
            height={148}
          />
        </div>
      </Link>
      <div></div> {/* Empty cell */}
      <Link href={`/building-info/${encodeURIComponent("애련정")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/애련정.svg"
            alt="애련정"
            quality={100}
            width={220}
            height={239}
          />
        </div>
      </Link>
      <Link href={`/building-info/${encodeURIComponent("존덕정")}`}>
        <div className="flex justify-center">
          <Image
            src="/building-info/존덕정.svg"
            alt="존덕정"
            quality={100}
            width={250}
            height={233}
          />
        </div>
      </Link>
      <div></div> {/* Empty cell */}
    </div>
  );
};

export default BuildingGrid;
