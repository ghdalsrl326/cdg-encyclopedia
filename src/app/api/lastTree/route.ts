import { getLastTree } from "@/service/tree";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return getLastTree().then((data) => NextResponse.json(data));
}
