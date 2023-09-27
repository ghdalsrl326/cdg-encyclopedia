import React from "react";
import { scDream300Font, scDream600Font } from "@/data/fonts";

const PricingTable = () => {
  return (
    <div className="min-w-full overflow-scroll">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className={`${scDream600Font.className} text-white bg-[#FF64DE]`}>
            <th className="border-t border-b p-2"></th>
            <th className="border-t border-b p-2 text-lg">전각관람</th>
            <th className="border-t border-b p-2 text-lg">후원관람</th>
          </tr>
        </thead>
        <tbody className={`${scDream300Font.className} text-center`}>
          <tr>
            <td
              className={`${scDream600Font.className} border-[#FF64DE] border-t border-b border-r p-2 text-lg`}
            >
              내국인
            </td>
            <td className="border-[#FF64DE] border-t border-b border-r p-2">
              만25세~만64세
              <br />
              3000원
            </td>
            <td className="border-[#FF64DE] border-t border-b p-2">
              만7세~만18세
              <br />
              2500원
            </td>
          </tr>
          <tr>
            <td
              className={`${scDream600Font.className} border-[#FF64DE] border-t border-b border-r p-2 text-lg`}
              rowSpan={2}
            >
              외국인
            </td>
            <td className="border-[#FF64DE] border-t border-b p-2 border-r">
              만18세 이하
              <br />
              무료
            </td>
            <td className="border-[#FF64DE] border-t border-b p-2" rowSpan={2}>
              만19세 이상
              <br />
              5000원
            </td>
          </tr>
          <tr>
            <td className="border-[#FF64DE] border-t border-b border-r p-2">
              만19세~만64세
              <br />
              3000원
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
