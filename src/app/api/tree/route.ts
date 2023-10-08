import { createTree, getAllTrees, getTreeByName } from "@/service/tree";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return getAllTrees().then((data) => NextResponse.json(data));
}
