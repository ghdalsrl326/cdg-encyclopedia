"use client";
import React, { useState } from "react";
import GardenNextButtonLayout from "./GardenNextButtonLayout";
import GardenTwoButtonLayout from "./GardenTwoButtonLayout";
import { LinkedList, SurveyNode } from "@/data/LinkedList";
import { initialSurveyData } from "@/data/Survey";
import Image from "next/image";
import GardenResultLayout from "./GardenResultLayout";
import { TREE } from "@/data/tree";
import { useRouter } from "next/navigation";
import { URL } from "@/data/url";
import { createTree, getAllTrees } from "@/service/tree";

const GardenLayout = () => {
  const router = useRouter();
  const [survey] = useState(new LinkedList(initialSurveyData));
  const [currentSurveyNode, setCurrentSurveyNode] = useState<SurveyNode | null>(
    null
  );
  const [isNaming, setIsNaming] = useState<boolean>(false);
  const [treeName, setTreeName] = useState<string>("");
  const [treeDescription, setTreeDescription] = useState<string>("");
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleStartSurvey = () => {
    setCurrentSurveyNode(survey.head);
  };

  const handleNextToNaming = () => {
    setIsNaming(true);
  };

  const handleNextToSubmit = async () => {
    if (!treeName) {
      alert("나무 이름을 입력해주세요.");
      return;
    }

    await getAllTrees().then((trees) => {
      if (trees.find((tree) => tree.name === treeName)) {
        alert("이미 존재하는 나무 이름입니다.");
        return;
      } else {
        setIsFinished(true);
      }
    });

    currentSurveyNode?.data.result &&
      (await createTree({
        name: treeName,
        description: treeDescription,
        treeType: currentSurveyNode?.data.result,
      }));
  };

  const handleNextToHome = () => {
    router.push(URL.GARDEN);
  };

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
      {currentSurveyNode &&
        currentSurveyNode.data.result &&
        !isNaming &&
        !isFinished && (
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
      {currentSurveyNode &&
        currentSurveyNode.data.result &&
        isNaming &&
        !isFinished && (
          <GardenResultLayout
            onNext={handleNextToSubmit}
            result={currentSurveyNode.data.result}
          >
            <br />
            <p className=" text-center">
              나무이름: &nbsp;
              <input
                className="w-1/2 outline-none"
                required
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
      {currentSurveyNode &&
        currentSurveyNode.data.result &&
        isNaming &&
        isFinished && (
          <GardenNextButtonLayout onNext={handleNextToHome}>
            <h1>후원에 소원 나무 심기를 완료하셨습니다.</h1>
            <h1>함께 후원에 심은 나무를 구경하러 가볼까요?</h1>
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
    </>
  );
};

export default GardenLayout;
