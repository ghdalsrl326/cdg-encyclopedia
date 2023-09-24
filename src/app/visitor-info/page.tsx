import React from "react";
import localFont from "next/font/local";

const scDreamFont = localFont({
  src: "../fonts/SCDream1.otf",
  display: "swap",
});

const page = () => {
  return (
    <section className={scDreamFont.className}>방문객 안내 페이지</section>
  );
};

export default page;
