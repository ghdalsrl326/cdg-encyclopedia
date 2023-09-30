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
  const [treeName, setTreeName] = useState<string>("");
  const [treeDescription, setTreeDescription] = useState<string>("");

  const handleStart = () => {
    setCurrentSurveyNode(survey.head);
  };

  const handleNextToNaming = () => {};

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
        <GardenNextButtonLayout onNext={handleStart}>
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
      {currentSurveyNode && currentSurveyNode.data.result && (
        <GardenResultLayout onNext={handleNextToNaming}>
          <Image
            className="z-10 border-4 border-[#A3CA7B]"
            src={`/garden/${currentSurveyNode.data.result}.jpeg`}
            alt={`${currentSurveyNode.data.result}`}
            width={280}
            height={280}
            quality={100}
          />
          <br />
          <h2 className="mb-2">{`<${currentSurveyNode.data.result}>`}</h2>
          <hr className="border-[#9BCB6C] border-t w-full" />
          <br />
          <h3 className="mb-2">
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc1
            }
          </h3>
          <hr className="border-[#9BCB6C] border-t w-full" />
          <br />
          <h3 className="mb-2">
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc2
            }
          </h3>
          <hr className="border-[#9BCB6C] border-t w-full" />
          <br />
          <h3 className="mb-2">
            {
              TREE.find((tree) => tree.id === currentSurveyNode.data.result)
                ?.desc3
            }
          </h3>
          <hr className="border-[#9BCB6C] border-t w-full mb-8" />
        </GardenResultLayout>
      )}
    </>
  );
};

export default GardenLayout;
