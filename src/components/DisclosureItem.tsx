"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { MdKeyboardArrowUp, MdOutlineRadioButtonChecked } from "react-icons/md";
import { scDream200Font } from "@/data/fonts";

type DisclosureItemProps = {
  title: string;
  items: { id: string; path: string }[];
  openImageSrc: string;
  closeImageSrc: string;
  urlPrefix: string;
  fragment?: "/" | "#";
};

const DisclosureItem = ({
  title,
  items,
  openImageSrc,
  closeImageSrc,
  urlPrefix,
  fragment = "/",
}: DisclosureItemProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between items-center rounded-lg shadow-sm shadow-[#FF64DE] bg-white px-4 py-1 text-left text-sm font-medium ">
            <span className="inline-flex flex-row items-center gap-4">
              {open ? (
                <Image
                  className="z-30"
                  src={openImageSrc}
                  alt={`${title}_선택됨`}
                  width={20}
                  height={20}
                  quality={100}
                />
              ) : (
                <Image
                  className="z-30"
                  src={closeImageSrc}
                  alt={title}
                  width={20}
                  height={20}
                  quality={100}
                />
              )}
              {title}
            </span>
            <MdKeyboardArrowUp
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-[#FF61D6]`}
            />
          </Disclosure.Button>
          <span className={scDream200Font.className}>
            <Disclosure.Panel className="flex flex-col gap-4 px-4 pt-4 pb-2 text-sm">
              {items.map((item) => (
                <Link
                  href={`${urlPrefix}${fragment}${item.path}`}
                  key={item.id}
                >
                  <span className="inline-flex items-center gap-4">
                    <MdOutlineRadioButtonChecked />
                    {item.id}
                  </span>
                </Link>
              ))}
            </Disclosure.Panel>
          </span>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureItem;
