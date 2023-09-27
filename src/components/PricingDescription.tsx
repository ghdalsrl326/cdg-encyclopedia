import { scDream300Font } from "@/data/fonts";
import React from "react";

const PricingDescription = () => {
  return (
    <span className={`${scDream300Font.className} flex flex-col gap-2`}>
      <h4>※ 한복 착용자 / 매월 마지막 주 수요일[문화가 있는 날] 무료</h4>
      <h4>※ 전각관람 - 유료관람객 10인 이상 단체 20% 할인 (2400원)</h4>
      <h4>※ 후원은 전각관람권을 함께 구매하셔야 합니다.</h4>
      <br />
      <li>무료 및 감면 대상자는 반드시 증빙 자료 제시</li>
      <li>함양문을 통해 창경궁과 연계관람 가능(별도 관람권 구매)</li>
      <li>
        4대궁(창덕궁 후원 포함), 경복궁, 창경궁, 덕수궁 및 종묘 관람권이 모두
        포함된 통합관람권: 10,000원 / 구매일로부터 3개월 동안 사용 가능(각 궁별
        1회 한정)
        <ul className="list-inside pl-5 pt-2 list-none flex flex-col gap-2">
          <li className="">
            - 단, 후원관람의 경우. 선착순 입장 인원 제한 있음 (온라인 예매 +
            관람 당일 현장판매)
          </li>
          <li className="">
            - 통합관람권 소지자, 무료 및 감면대상자가 후원 온라인 예매시 결제된
            비용은 관람 당일 매표소에서 환불 신청
          </li>
        </ul>
      </li>

      <li>전각 해설은 돈화문 안쪽 종합안내도 앞에서 시작</li>
      <li>후원은 정해진 시간에 입장하여 해설사와 함께 이동하며 관람</li>
      <li>전각 및 후원 입장 시간 미준수시 입장 및 환불 불가</li>
      <li>
        외국어 안내 시간에는 외국인과 동반한 내국인(최대 2인)외 내국인 입장불가
      </li>
      <h4>
        ※ 관람해설 시간은 계절별, 일몰시각 등에 따라 수시로 변경됨으로 창덕궁
        홈페이지 혹은 현장 디지털 배너 참조
      </h4>
    </span>
  );
};

export default PricingDescription;
