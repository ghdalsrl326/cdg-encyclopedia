import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { URL } from "@/data/constant";

const yeongdoFont = localFont({
  src: "./fonts/yeongdo.woff2",
  display: "swap",
});

export default function Home() {
  return (
    <main className={yeongdoFont.className}>
      <section className="flex flex-col items-center h-screen relative">
        <h1 className="text-5xl z-10">창덕도감</h1>
        <Image
          fill
          className="absolute top-0 left-0 z-0"
          src="/cover/under.svg"
          alt="background-image"
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <Image
          fill
          className="absolute top-0 left-0 z-20"
          src="/cover/over.svg"
          alt="background-animation-object"
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <Image
          className="z-10"
          src="/cover/인정전.svg"
          alt="인정전"
          width={839}
          height={685}
          quality={100}
        />
        <Link href={URL.VISITOR_INFO} className=" bg-white z-20">
          지도보기
        </Link>
        <Link href={URL.BUILDING_INFO} className="w-1/8 bg-white z-20">
          창덕궁 둘러보기
        </Link>
        <Link href={URL.GARDEN} className="w-1/8 bg-white z-20">
          후원의 숲
        </Link>
      </section>
    </main>
  );
}
