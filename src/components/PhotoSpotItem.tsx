import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
};

const PhotoSpotItem = ({ title, url }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/visitor-info/${title}_포토스팟.png`}
          alt={`${title}_포토스팟`}
          width={100}
          height={100}
          quality={100}
        />
      </Link>
      <h2 className="text-lg">({title})</h2>
    </div>
  );
};

export default PhotoSpotItem;
