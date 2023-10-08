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

export async function getTreeByName(name: string): Promise<Tree | null> {
  const query = `*[_type == "tree" && name == "${name}"][0]`;
  const params = { name };
  const tree = await client.fetch<Tree>(query, params);

  if (!tree) {
    console.error("Tree not found");
    return null;
  }

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
