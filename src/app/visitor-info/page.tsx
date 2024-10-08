import React from "react";
import Image from "next/image";
import ZoomableImage from "@/components/ZoomableImage";
import { SlArrowDown } from "react-icons/sl";
import SectionTitle from "@/components/SectionTitle";
import FacilityItem from "@/components/FacilityItem";
import RegionItem from "@/components/RegionItem";
import PhotoSpotItem from "@/components/PhotoSpotItem";
import PhotoSpotSubTitle from "@/components/PhotoSpotSubTitle";
import {
  scDream300Font,
  scDream500Font,
  scDream600Font,
  yeongdoFont,
} from "@/data/fonts";
import HorizontalDivider from "@/components/HorizontalDivider";
import PathItem from "@/components/PathItem";
import VisitingHoursItem from "@/components/VisitingHoursItem";
import PricingTable from "@/components/PricingTable";
import VisitingHoursDescription from "@/components/VisitingHoursDescription";
import PricingDescription from "@/components/PricingDescription";
import TransportationDescription from "@/components/TransportationDescription";
import EtiquetteDescription from "@/components/EtiquetteDescription";

const page = () => {
  return (
    <section
      className={`${scDream500Font.className} relative flex flex-col justify-between px-6 lg:px-64 pt-20 pb-12 items-center text-[#FF61D6] overflow-y-scroll`}
      style={{
        backgroundImage: "url(/visitor-info/배경.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <button
        className={`${yeongdoFont.className} z-0 bg-white rounded-full shadow-lg shadow-[#D3EEF3] w-48 h-12 text-xl`}
        disabled
      >
        지도보기
      </button>
      <ZoomableImage
        src="/visitor-info/지도.png"
        alt="map"
        width={3000}
        height={3080}
        quality={100}
      />
      <div className="flex flex-col gap-12 items-center rounded-3xl z-0 w-full bg-white">
        <SlArrowDown className=" text-[#FFC1F2] h-12 w-12" />
        <section
          id="시설정보"
          className="w-3/4 flex flex-col gap-4 items-center"
        >
          <SectionTitle title="시설정보" />
          <div className="flex flex-col gap-4 items-start">
            <FacilityItem src="매표소" title="매표소" />
            <FacilityItem src="안내" title="안내" />
            <FacilityItem src="화장실" title="화장실" />
            <FacilityItem src="홍보관" title="홍보관 ( 음료, 기념품점 )" />
            <FacilityItem src="휠체어" title="휠체어, 유모차 대여" />
            <FacilityItem src="물품보관함" title="물품보관함" />
            <FacilityItem src="수유실" title="수유실" />
            <FacilityItem src="구급약품" title="구급약품" />
            <FacilityItem src="심장제세동기" title="심장제세동기" />
          </div>
        </section>
        <HorizontalDivider />
        <section id="권역" className="w-3/4 flex flex-col gap-4 text-[#05AED8]">
          <SectionTitle title="권역" />
          <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-16">
            <div className="flex flex-col gap-4">
              <RegionItem index="1" title="돈화문" />
              <RegionItem index="2" title="인정전" />
              <RegionItem index="3" title="선정전" />
              <RegionItem index="4" title="희정당" />
              <RegionItem index="5" title="대조전" />
              <RegionItem index="6" title="낙선재" />
              <RegionItem index="7" title="성정각" />
              <RegionItem index="8" title="후원 입구/매표소" />
            </div>
            <div className="flex flex-col gap-4">
              <RegionItem index="9" title="부용지와 주합루" />
              <RegionItem index="10" title="애련지와 의두합" />
              <RegionItem index="11" title="연경당 일원" />
              <RegionItem index="12" title="존덕정 일원" />
              <RegionItem index="13" title="옥류천 일원" />
              <RegionItem index="14" title="신 선원전 일원" />
              <RegionItem index="15" title="구 선원전 일원" />
              <RegionItem index="16" title="궐내각사 일원" />
            </div>
          </div>
        </section>
        <HorizontalDivider />
        <section id="포토스팟" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="포토스팟" />
          <PhotoSpotSubTitle />
          <div className="grid grid-cols-1 self-center gap-16 md:grid-cols-2">
            <PhotoSpotItem
              title="돈화문"
              url={"https://www.instagram.com/ar/1951586811885282"}
            />
            <PhotoSpotItem
              title="인정전"
              url={"https://www.instagram.com/ar/631724325657124"}
            />
            <PhotoSpotItem
              title="낙선재"
              url={"https://www.instagram.com/ar/1455099165279921"}
            />
            <PhotoSpotItem
              title="부용지"
              url={"https://www.instagram.com/ar/352796290426195"}
            />
          </div>
        </section>
        <HorizontalDivider />
        <section id="추천동선" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="추천동선" />
          <PathItem
            title="창덕궁의 주요 전각이 보고싶다면?"
            path={["❶", "▷", "❷", "▷", "❸", "▷", "❹", "▷", "❺", "▷", "❻"]}
          />
          <PathItem
            title="종로 한복판에서 느껴보는 자연"
            path={["❶", "▷", "❽", "▷", "❾", "▷", "❿", "▷", "⓬", "▷", "⓭"]}
          />
          <PathItem
            title="창덕궁 옛 모습을 간직한 나무를 따라"
            path={["❶", "▷", "❼", "▷", "❾", "▷", "⓬", "▷", "⓯", "▷", "⓰"]}
          />
        </section>
        <HorizontalDivider />
        <section id="관람시간" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="관람시간" />
          <VisitingHoursItem
            title="2월~5월, 9월~10월 "
            time="09:00 ~ 18:00"
            next
          />
          <VisitingHoursItem title="6월~8월" time="09:00 ~ 18:30" next />
          <VisitingHoursItem title="11월~1월" time="09:00 ~ 17:30" />
          <VisitingHoursDescription />
        </section>
        <HorizontalDivider />
        <section id="관람요금" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="관람요금" />
          <PricingTable />
          <PricingDescription />
        </section>
        <HorizontalDivider />
        <section id="교통안내" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="교통안내" />
          <TransportationDescription />
        </section>
        <HorizontalDivider />
        <section id="관람예절" className="w-3/4 flex flex-col gap-4">
          <SectionTitle title="관람예절" />
          <EtiquetteDescription />
        </section>
        <SlArrowDown className=" text-[#FFC1F2] h-12 w-12 mb-24 rotate-180" />
      </div>
    </section>
  );
};

export default page;
