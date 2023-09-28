"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { notoSansKRFont } from "@/data/fonts";
import { Dialog, Transition } from "@headlessui/react";

const GardenIntroButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`${notoSansKRFont.className} flex flex-row justify-center items-center gap-2 bg-white text-black rounded-full border border-black px-2 py-1 text-lg font-bold`}
      >
        <Image
          src={`/garden/프로그램소개버튼.svg`}
          alt={"프로그램소개버튼"}
          width={18}
          height={18}
          quality={100}
        />
        프로그램 소개
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`${notoSansKRFont.className} text-[#966934] relative z-10`}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-white w-full max-w-sm transform overflow-hidden p-8 align-middle shadow-xl transition-all">
                  <div className="flex flex-col justify-center items-center text-center border-4 border-[#8AB653] w-full h-full p-4 gap-4">
                    <Image
                      className="z-10"
                      src={`/garden/편지지나무.png`}
                      alt={`편지지나무`}
                      width={60}
                      height={72}
                      quality={100}
                    />
                    <h1 className="font-semibold">
                      {"<창덕궁 후원에 소원나무 심기>"}
                    </h1>
                    <h2>
                      {
                        "<창덕궁 후원에 소원나무 심기>는 창덕궁 관람객들이 직접 온라인 후원에 소원을 담은 나무를 심는 프로그램입니다."
                      }
                    </h2>
                    <h2>
                      {
                        "창덕궁을 관람하며 심은 우리의 나무는 온라인 창덕궁 후원 안에서 숲을 이루고, 오래오래 우리 소원을 간직하고 있을 것입니다."
                      }
                    </h2>
                    <span>
                      .<br />
                      .<br />.{/* <br /> */}
                    </span>
                    <h2 className="font-semibold">그럼 이제</h2>
                    <h2 className="font-semibold text-lg">
                      “창덕궁 후원에 소원을 담은 나무를 함께 심으러 가볼까요?”
                    </h2>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GardenIntroButton;
