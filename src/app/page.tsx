import Image from "next/image";
import Link from "next/link";
import { URL } from "@/data/url";
import { yeongdoFont } from "@/data/fonts";

export default function Home() {
  return (
    <main className={yeongdoFont.className}>
      <section className="relative flex flex-col justify-center items-center h-screen">
        <h1 className="absolute top-[10%] text-6xl text-white z-10">
          창덕도감
        </h1>
        <Image
          fill
          className="absolute top-0 left-0 z-0"
          src="/cover/under.png"
          alt="background-image"
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
        />
        <Image
          fill
          className="absolute top-0 left-0 z-20"
          src="/cover/over.png"
          alt="background-animation-object"
          style={{ objectFit: "cover", objectPosition: "center" }}
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
        <div className="absolute top-[50%] md:top-[70%] z-20 text-2xl w-full px-16 text-[#FF61D6]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 text-center">
            <Link
              href={URL.VISITOR_INFO}
              className="flex items-center justify-center w-full md:w-1/3 px-4 py-2 bg-white rounded-full"
            >
              <h2>창덕궁 지도보기</h2>
            </Link>
            <Link
              href={URL.BUILDING_INFO}
              className="flex items-center justify-center w-full md:w-1/3 px-4 py-2 bg-white rounded-full"
            >
              <h2>창덕궁 둘러보기</h2>
            </Link>
            <Link
              href={URL.GARDEN}
              className="flex items-center justify-center w-full md:w-1/3 px-4 py-2 bg-white rounded-full"
            >
              <h2>후원의 숲</h2>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
