import Image from "next/image";
import localFont from "next/font/local";

const yeongdoFont = localFont({
  src: "./fonts/yeongdo.woff2",
  display: "swap",
});

export default function Home() {
  return <main className={yeongdoFont.className}>창덕도감 커버페이지</main>;
}
