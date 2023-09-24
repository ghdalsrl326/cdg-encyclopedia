import React from "react";
import localFont from "next/font/local";

const nanumOeHarMeoNiGeurSsiFont = localFont({
  src: "../fonts/NanumOeHarMeoNiGeurSsi.ttf",
  display: "swap",
});

const page = () => {
  return (
    <section className={nanumOeHarMeoNiGeurSsiFont.className}>
      후원 페이지
    </section>
  );
};

export default page;
