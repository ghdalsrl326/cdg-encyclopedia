import { Tree } from "@/data/tree.type";
import { client } from "./sanity";

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
  const newTree = await client.create({
    _type: "tree",
    _id: name,
    name,
    description,
    treeType,
  });
  return newTree;
}
