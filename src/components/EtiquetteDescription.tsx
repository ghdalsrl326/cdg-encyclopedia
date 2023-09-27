import { scDream300Font } from "@/data/fonts";
import React from "react";

const EtiquetteDescription = () => {
  return (
    <div className={`${scDream300Font.className} flex flex-col p-4 gap-2`}>
      <li>문화유산 보호를 위하여 모든 구역에서 금연합니다</li>
      <li>
        음식물, 주류, 인화물, 애완동물, 운동기구, 놀이기구, 돗자리 등은 반입하지
        않습니다
      </li>
      <li>궁궐 내 의자에 눕거나 음식물(음료 제외)을 먹지 않습니다</li>
    </div>
  );
};

export default EtiquetteDescription;
