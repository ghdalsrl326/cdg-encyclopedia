"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { notoSansKRFont } from "@/data/fonts";
import { Dialog, Transition } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";
import useSWR from "swr";
import { Tree } from "@/data/tree.type";

const GardenSearchButton = () => {
  const [treeName, setTreeName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data: tree } = useSWR<Tree>("/api/lastTree", {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateOnMount: true,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function searchTree() {
    console.log(treeName);
  }

  return (
    <>
      <button
        onClick={openModal}
        className={`${notoSansKRFont.className} flex flex-row justify-center items-center gap-2 bg-white text-black rounded-full border border-black px-2 py-1 text-lg font-bold`}
      >
        <Image
          src={`/garden/검색버튼.svg`}
          alt={"소원나무찾기버튼"}
          width={18}
          height={18}
          quality={100}
        />
        소원나무 찾기
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={`${notoSansKRFont.className} text-black relative z-10`}
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
                <Dialog.Panel className="bg-white w-full max-w-sm transform overflow-hidden p-4 align-middle shadow-xl transition-all">
                  <div className="flex flex-col justify-center items-center text-center w-full h-full p-4 gap-4">
                    <div className=" relative w-full aspect-[6/5] bg-[#D9D9D9]">
                      <h3 className=" z-10 absolute top-3 left-3 px-3 py-1 bg-white rounded-full border border-black ">
                        최근에 심은 나무
                      </h3>
                      {tree ? (
                        <div className="group">
                          <Image
                            src={`/garden/${tree.treeType}.png`}
                            alt={tree.name}
                            fill
                            style={{ objectFit: "contain" }}
                            className="z-0"
                          />
                          <div className=" hidden group-hover:block absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black text-white text-sm  rounded p-1 min-w-[100px] text-center">
                            {tree.name !== "" && `나무이름: ${tree.name}`}
                            <br />
                            {tree.description !== "" &&
                              `소원: ${tree.description}`}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-row justify-between items-center w-full border-black border-b">
                      <input
                        className="w-full outline-none text-center"
                        required
                        type="text"
                        onChange={(e) => setTreeName(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            searchTree();
                          }
                        }}
                      />
                      <button onClick={searchTree} className="text-3xl">
                        <IoSearch />
                      </button>
                    </div>
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

export default GardenSearchButton;
