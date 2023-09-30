import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { yeongdoFont } from "@/data/fonts";
import SWRConfigContext from "@/context/SWRConfigContext";

export const metadata: Metadata = {
  title: "창덕도감 | 2023 청년 유네스코 세계유산 지킴이 {창덕하게}",
  description:
    "창덕도감은 창덕궁이 가진 미를 살려 젊은 세대에게 창덕궁의 새로운 미적 체험을 전달해주고자합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={yeongdoFont.className}>
        <Header />
        <SWRConfigContext>{children}</SWRConfigContext>
      </body>
    </html>
  );
}
