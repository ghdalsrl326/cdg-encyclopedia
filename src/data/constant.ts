export const URL = {
  COVER: "/",
  BUILDING_INFO: "/building-info",
  GARDEN: "/garden",
  VISITOR_INFO: "/visitor-info",
} as const;

export const MAPSECTOR = [
  { id: "시설정보", path: encodeURIComponent("시설정보") },
  {
    id: "권역",
    path: encodeURIComponent("권역"),
  },
  {
    id: "포토스팟",
    path: encodeURIComponent("포토스팟"),
  },
  {
    id: "추천동선",
    path: encodeURIComponent("추천동선"),
  },
  {
    id: "관람시간",
    path: encodeURIComponent("관람시간"),
  },
  {
    id: "관람요금",
    path: encodeURIComponent("관람요금"),
  },
  {
    id: "교통정보",
    path: encodeURIComponent("교통정보"),
  },
  {
    id: "관람예절",
    path: encodeURIComponent("관람예절"),
  },
] as const;

export const BUILDING = [
  {
    id: "돈화문",
    path: encodeURIComponent("돈화문"),
  },
  {
    id: "인정전",
    path: encodeURIComponent("인정전"),
  },
  {
    id: "선정전",
    path: encodeURIComponent("선정전"),
  },
  {
    id: "희정전",
    path: encodeURIComponent("희정전"),
  },
  {
    id: "대조전",
    path: encodeURIComponent("대조전"),
  },
  {
    id: "성정각",
    path: encodeURIComponent("성정각"),
  },
  {
    id: "낙선재",
    path: encodeURIComponent("낙선재"),
  },
  {
    id: "부용정",
    path: encodeURIComponent("부용정"),
  },
  {
    id: "애련정",
    path: encodeURIComponent("애련정"),
  },
  {
    id: "존덕정",
    path: encodeURIComponent("존덕정"),
  },
] as const;

export const GARDEN = [
  {
    id: "후원의숲",
    path: encodeURIComponent("후원의숲"),
  },
] as const;
