import { scDream300Font, scDream500Font, scDream600Font } from "@/data/fonts";
import React from "react";

const TransportationDescription = () => {
  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="flex space-x-4">
        <h3 className={`${scDream600Font.className} flex-shrink-0 w-24`}>
          지하철
        </h3>
        <div className="flex flex-col space-y-2">
          <h4 className={scDream500Font.className}>안국역(3호선)</h4>
          <h4 className={scDream300Font.className}>
            3번 출구 걸어서 5분 종로3가역(1,3,5호선) 6번 출구 걸어서10분
          </h4>
        </div>
      </div>
      <div className="flex space-x-4">
        <h3 className={`${scDream600Font.className} flex-shrink-0 w-24`}>
          버스
        </h3>
        <div className="flex flex-col space-y-2">
          <div className="space-y-1">
            <h4 className={scDream500Font.className}>간선(파랑)</h4>
            <h4 className={scDream300Font.className}>
              109, 151, 162, 171. 172. 272
            </h4>
          </div>
          <div className="space-y-1">
            <h4 className={scDream500Font.className}>지선(초록)</h4>
            <h4 className={scDream300Font.className}>7025</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationDescription;
