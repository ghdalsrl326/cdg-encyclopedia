import React from "react";
import { scDream300Font } from "@/data/fonts";

type Props = {
  title: string;
  path: string[];
};

const PathItem = ({ title, path }: Props) => {
  return (
    <div
      className={`${scDream300Font.className} flex flex-col justify-center items-center`}
    >
      <h2 className="py-4">{title}</h2>
      <p
        className={`${scDream300Font.className} flex-wrap flex flex-row gap-2`}
      >
        {path.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
    </div>
  );
};

export default PathItem;
