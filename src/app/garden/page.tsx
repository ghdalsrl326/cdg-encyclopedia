import { nanumOeHarMeoNiGeurSsiFont } from "@/data/fonts";
import React from "react";
import Image from "next/image";
import GardenHelpButtons from "@/components/GardenHelpButtons";
import { getAllTrees } from "@/service/tree";

const page = async () => {
  // TODO: 나무 이미지가 즉각 업데이트 되지 않는 문제 해결
  const trees = await getAllTrees();

  return (
    <section
      className={`${nanumOeHarMeoNiGeurSsiFont.className} relative h-screen flex flex-col justify-between pt-28 pb-12 items-center text-[#FF61D6] px-4 overflow-y-scroll`}
      style={{
        backgroundImage: "url(/garden/배경.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-10 w-fullflex justify-center">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12">
          {trees.map((tree, index) => (
            <div
              key={index}
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-20 xl:h-20 2xl:w-16 2xl:h-16"
            >
              <Image
                src={`/garden/${tree.treeType}.png`}
                alt={tree.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      <GardenHelpButtons />
    </section>
  );
};

export default page;
