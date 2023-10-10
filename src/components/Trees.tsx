"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import { Tree } from "@/data/tree.type";

const Trees = () => {
  const { data: trees } = useSWR<Tree[]>("/api/tree", {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  });

  return (
    <div className="z-10 w-full flex justify-center">
      <div className="grid gap-6 grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-12">
        {trees &&
          trees.map((tree, index) => (
            <div
              key={tree._id}
              className="group relative w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-20 xl:h-20 2xl:w-16 2xl:h-16"
            >
              <Image
                src={`/garden/${tree.treeType}.png`}
                alt={tree.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="hidden group-hover:block absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm  rounded p-1 min-w-[100px] text-center">
                {tree.name !== "" && `나무이름: ${tree.name}`}
                <br />
                {tree.description !== "" && `소원: ${tree.description}`}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Trees;
