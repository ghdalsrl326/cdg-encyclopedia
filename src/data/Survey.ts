import { NodeData, SurveyNode } from "@/data/LinkedList";

export const initialSurveyData: NodeData = {
  question: "1. 처음 본 사람들과의 모임에서 주로 분위기를 주도한다",
  yes: new SurveyNode({
    question: "2. 일을 시작하기 전, 겁을 먹기보다 일단 시도해본다",
    yes: new SurveyNode({
      question: "3. 타인에게 친절하고 다정하다는 말을 자주 듣는다",
      yes: new SurveyNode({
        question: "4. 과정보다 결과가 더 중요하다",
        yes: new SurveyNode({ result: "회화나무" }),
        no: new SurveyNode({ result: "느티나무" }),
      }),
      no: new SurveyNode({
        question:
          "4. 일을 하는 관계에서 사람이 좋은 것보다 직무능력이 좋은게 좋다",
        yes: new SurveyNode({ result: "회화나무" }),
        no: new SurveyNode({ result: "느티나무" }),
      }),
    }),
    no: new SurveyNode({
      question: "3. 명예가 돈보다 중요하다",
      yes: new SurveyNode({
        question: "4. 경험보다는 감을 믿을 때가 많다",
        yes: new SurveyNode({ result: "회화나무" }),
        no: new SurveyNode({ result: "느티나무" }),
      }),
      no: new SurveyNode({
        question: "4. 이상보다는 현실 속 가능성을 더 보는 편이다",
        yes: new SurveyNode({ result: "회화나무" }),
        no: new SurveyNode({ result: "향나무" }),
      }),
    }),
  }),
  no: new SurveyNode({
    question: "2. 일이 잘 안 풀려도 금방 털고 일어난다",
    yes: new SurveyNode({
      question: "3. 철학적인 것에 관심이 있다",
      yes: new SurveyNode({
        question:
          "4. 누군가 알아주지 않아도 선의를 베푸는 행동에서 행복을 느낀다",
        yes: new SurveyNode({ result: "향나무" }),
        no: new SurveyNode({ result: "뽕나무" }),
      }),
      no: new SurveyNode({
        question: "4. 이유없는 선의는 없다",
        yes: new SurveyNode({ result: "향나무" }),
        no: new SurveyNode({ result: "능수나무" }),
      }),
    }),
    no: new SurveyNode({
      question: "3. 타인의 상처주는 말을 신경쓰지 않는다",
      yes: new SurveyNode({
        question: "4. 스스로에 대한 확신이 있다",
        yes: new SurveyNode({ result: "뽕나무" }),
        no: new SurveyNode({ result: "능수나무" }),
      }),
      no: new SurveyNode({
        question: "4. 상대방의 도움을 잘 거절하지 못한다",
        yes: new SurveyNode({ result: "뽕나무" }),
        no: new SurveyNode({ result: "능수나무" }),
      }),
    }),
  }),
};
