import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BUILDING, INSTAGRAMURL } from "@/data/constant";

type Props = {
  slug: string;
};

const BuildingSNS = ({ slug }: Props) => {
  const decodedSlug = decodeURIComponent(slug);
  const buildingData = BUILDING.find((building) => building.id === decodedSlug);

  return (
    <div className="flex flex-row gap-2 p-8 justify-center">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="border-[#FF64DE] border-2 transform transition-transform duration-300 hover:scale-105"
        >
          <Link
            href={buildingData?.sns[index] || INSTAGRAMURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`/building-info/${slug}_SNS_${index}.png`}
              alt={`${slug}_SNS_image_${index}`}
              width={93}
              height={93}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BuildingSNS;
