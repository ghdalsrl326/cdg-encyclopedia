import { getTreeByName } from "@/service/tree";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { keyword: string };
};
export async function GET(_: NextRequest, context: Context) {
  return getTreeByName(context.params.keyword) //
    .then((data) => NextResponse.json(data));
}
