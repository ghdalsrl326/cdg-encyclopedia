import { scDream300Font, scDream600Font } from "@/data/fonts";
import React from "react";

type Props = {
  title: string;
  time: string;
  next?: boolean;
};

const VisitingHoursItem = ({ title, time, next = false }: Props) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <h2 className={`${scDream600Font.className}`}>{title}</h2>
        <time className={`${scDream300Font.className}`}>{time}</time>
      </div>
      {next && <hr className="border-[#FFB1EE] border-t w-full" />}
    </>
  );
};

export default VisitingHoursItem;
