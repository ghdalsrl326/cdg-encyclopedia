import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdArrowBackIos } from "react-icons/md";

type Props = {
  setDialogContentType: React.Dispatch<
    React.SetStateAction<"notfound" | "search">
  >;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchTreeNotFound = ({ setDialogContentType, setIsOpen }: Props) => {
  return (
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
        <div className="flex flex-col justify-center items-center text-center w-full h-full p-4 gap-4 relative aspect-[6/5] bg-[#D9D9D9]">
          <button
            className=" z-10 absolute top-3 left-3 text-[#FF64DE] "
            onClick={() => {
              setDialogContentType("search");
              setIsOpen(true);
            }}
          >
            <MdArrowBackIos size={24} />
          </button>
          <span className="text-4xl">?</span>
          <h2>검색 결과가 없습니다</h2>
          <h2>정확한 나무 이름을 다시 검색해주세요</h2>
        </div>
      </Dialog.Panel>
    </Transition.Child>
  );
};

export default SearchTreeNotFound;
