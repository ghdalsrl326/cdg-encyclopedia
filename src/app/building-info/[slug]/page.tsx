import React from "react";
import Image from "next/image";
import { BUILDING } from "@/data/building";
import BuildingHighlightedMap from "@/components/BuildingHighlightedMap";
import BuildingNav from "@/components/BuildingNav";
import BuildingContent from "@/components/BuildingContent";
import BuildingSNS from "@/components/BuildingSNS";
import { scDream400Font } from "@/data/fonts";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: Props) => {
  return (
    <section
      className="relative flex flex-col justify-between pt-28 pb-12 items-center text-[#FF61D6] px-4"
      style={{
        backgroundImage: "url(/building-info/background.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <article className="z-10 bg-white w-11/12 h-10/12 rounded-2xl">
        <BuildingNav />
        <div className={`${scDream400Font.className} whitespace-pre-wrap px-8`}>
          <div className="flex flex-row justify-center py-6">
            <Image
              src={`/building-info/${decodeURIComponent(slug)}.svg`}
              alt={decodeURIComponent(slug)}
              quality={100}
              width={BUILDING.find((building) => building.path === slug)?.width}
              height={
                BUILDING.find((building) => building.path === slug)?.height
              }
            />
          </div>
          <BuildingHighlightedMap slug={slug} />
          <BuildingSNS slug={slug} />
          <BuildingContent slug={slug} />
        </div>
      </article>
    </section>
  );
};

export default page;
