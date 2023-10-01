import { Tree } from "@/data/tree.type";
import { client } from "./sanity";

export const toAscii = (string: string) =>
  string
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");

export async function getAllTrees(): Promise<Tree[]> {
  const trees = await client.fetch<Tree[]>(
    `*[_type == "tree"] | order(_createdAt asc)`
  );
  return trees;
}

export async function getTreeById(id: string): Promise<Tree> {
  const tree = await client.fetch<Tree>(`*[_type == "tree" && _id == $id][0]`, {
    id,
  });
  return tree;
}

export async function createTree({
  name,
  description,
  treeType,
}: Tree): Promise<Tree> {
  const newTree = await client.createIfNotExists({
    _type: "tree",
    name,
    description,
    treeType,
    _id: toAscii(name).replaceAll(" ", "_"),
  });
  return newTree;
}
