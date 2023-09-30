"use client";
import React, { useState } from "react";
import GardenNextButtonLayout from "./GardenNextButtonLayout";
import GardenTwoButtonLayout from "./GardenTwoButtonLayout";
import { LinkedList, SurveyNode } from "@/data/LinkedList";
import { initialSurveyData } from "@/data/Survey";
import Image from "next/image";
import GardenResultLayout from "./GardenResultLayout";
import { TREE } from "@/data/tree";

const GardenLayout = () => {
  const [survey] = useState(new LinkedList(initialSurveyData));
  const [currentSurveyNode, setCurrentSurveyNode] = useState<SurveyNode | null>(
    null
  );
  const [isNaming, setIsNaming] = useState<boolean>(false);
  const [treeName, setTreeName] = useState<string>("");
  const [treeDescription, setTreeDescription] = useState<string>("");

  const handleStartSurvey = () => {
    setCurrentSurveyNode(survey.head);
  };

  const handleNextToNaming = () => {
    setIsNaming(true);
  };

  const handleNextToSubmit = () => {};

  const handleNextToHome = () => {};

  const handleAnswerSelect = (answer: "yes" | "no") => {
    if (currentSurveyNode) {
      const nextNode =
        answer === "yes"
          ? currentSurveyNode.data.yes
          : currentSurveyNode.data.no;
      if (nextNode) {
        setCurrentSurveyNode(nextNode);
      } else {
        console.error("Next node is not available");
      }
    }
  };

  return (
    <>
      {currentSurveyNode && !currentSurveyNode.data.result && (
        <GardenTwoButtonLayout
          question={currentSurveyNode?.data.question || ""}
          onYes={() => handleAnswerSelect("yes")}
          onNo={() => handleAnswerSelect("no")}
        />
      )}
      {!currentSurveyNode && (
        <GardenNextButtonLayout onNext={handleStartSurvey}>
          <h1>지금부터 창덕궁 후원에 함께 나무를 심어보아요.</h1>
          <Image
            className="z-10"
            src={`/garden/편지지나무.png`}
            alt={`편지지나무`}
            width={60}
            height={72}
            quality={100}
          />
        </GardenNextButtonLayout>
      )}
      {currentSurveyNode && currentSurveyNode.data.result && !isNaming && (
        <GardenResultLayout
          onNext={handleNextToNaming}
          result={currentSurveyNode.data.result}
        >
          <br />
          <p className=" w-full mb-8 text-center underline-each-line">
            {`<${currentSurveyNode.data.result}>`}
            <br />
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc1
            }
            <br />
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc2
            }
            <br />
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc3
            }
          </p>
        </GardenResultLayout>
      )}
      {currentSurveyNode && currentSurveyNode.data.result && isNaming && (
        <GardenResultLayout
          onNext={handleNextToSubmit}
          result={currentSurveyNode.data.result}
        >
          <br />
          <p className=" text-center">
            나무이름: &nbsp;
            <input
              className="w-1/2"
              type="text"
              onChange={(e) => setTreeName(e.target.value)}
            />
          </p>
          <br />
          <textarea
            className="w-full mb-8 text-center underline-each-line"
            placeholder="나무와 남기고 싶은 소원을 적어주세요."
            onChange={(e) => setTreeDescription(e.target.value)}
          ></textarea>
        </GardenResultLayout>
      )}
    </>
  );
};

export default GardenLayout;
