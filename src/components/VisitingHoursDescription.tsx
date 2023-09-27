import { scDream300Font, scDream600Font } from "@/data/fonts";
import React from "react";

const VisitingHoursDescription = () => {
  return (
    <>
      <div className=" pt-4 pb-2">
        <h3 className={`${scDream600Font.className} text-2xl`}>
          ※ 휴관일: 매주 월요일
        </h3>
        <h4 className={`${scDream300Font.className}`}>
          (정기 휴관일인 월요일이 공휴일일 경우 개방하여, 익일 휴관)
        </h4>
      </div>
      <h4 className={`${scDream300Font.className}`}>
        ※ 입장은 관람 마감 1시간 전까지
      </h4>
      <h4 className={`${scDream300Font.className}`}>
        ※ 후원 관람시간은 후원 관람해설시간과 동일
      </h4>
    </>
  );
};

export default VisitingHoursDescription;
