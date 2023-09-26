import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { URL } from "@/data/url";

const yeongdoFont = localFont({
  src: "./fonts/yeongdo.woff2",
  display: "swap",
});

export default function Home() {
  return (
    <main className={yeongdoFont.className}>
      <section className="relative flex flex-col justify-center items-center h-screen">
        <h1 className="text-6xl text-white z-10">창덕도감</h1>
        <Image
          fill
          className="absolute top-0 left-0 z-0"
          src="/cover/under.png"
          alt="background-image"
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <Image
          fill
          className="absolute top-0 left-0 z-20"
          src="/cover/over.png"
          alt="background-animation-object"
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <Image
          className="block z-10"
          src="/cover/인정전.png"
          alt="인정전"
          width={839}
          height={685}
          quality={100}
        />
        <div className="absolute top-2/3 z-20 text-2xl w-[60%] text-[#FF61D6]">
          <div className="flex flex-row gap-16 text-center">
            <Link
              href={URL.VISITOR_INFO}
              className="w-1/3 p-4 bg-white rounded-full"
            >
              지도보기
            </Link>
            <Link
              href={URL.BUILDING_INFO}
              className="w-1/3 p-4 bg-white rounded-full"
            >
              창덕궁 둘러보기
            </Link>
            <Link href={URL.GARDEN} className="w-1/3 p-4 bg-white rounded-full">
              후원의 숲
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
