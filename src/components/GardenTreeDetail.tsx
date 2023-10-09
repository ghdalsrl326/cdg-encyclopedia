import React from "react";
import Image from "next/image";
import { TREE } from "@/data/tree";
import { useRouter } from "next/navigation";
import { URL } from "@/data/url";
import GardenResultLayout from "./GardenResultLayout";
import { getTreeByName } from "@/service/tree";
import GardenDetailLayout from "./GardenDetailLayout";

type Props = {
  slug: string;
};

const GardenTreeDetail = async ({ slug }: Props) => {
  const tree = await getTreeByName(slug);

  return (
    tree && (
      <GardenDetailLayout result={tree.treeType}>
        <br />
        <p className="text-center">
          나무이름: &nbsp;
          <input
            className="w-1/2 outline-none"
            required
            type="text"
            value={tree.name}
            readOnly
          />
        </p>
        <br />
        <textarea
          className="w-full mb-8 text-center underline-each-line"
          placeholder="나무와 남기고 싶은 소원을 적어주세요."
          value={tree.description}
          readOnly
        />
      </GardenDetailLayout>
    )
  );
};

export default GardenTreeDetail;
