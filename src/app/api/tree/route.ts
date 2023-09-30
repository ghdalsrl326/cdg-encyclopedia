import { createTree } from "@/service/tree";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json("Hello world!");
}
