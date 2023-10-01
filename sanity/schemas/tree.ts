import { defineField, defineType } from "sanity";

export default defineType({
  name: "tree",
  title: "Tree",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "나무 이름",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(20),
    }),
    defineField({
      name: "description",
      title: "소원",
      type: "string",
    }),
    defineField({
      name: "treeType",
      title: "나무 종류",
      type: "string",
      options: {
        list: [
          { title: "능수나무", value: "능수나무" },
          { title: "뽕나무", value: "뽕나무" },
          { title: "향나무", value: "향나무" },
          { title: "느티나무", value: "느티나무" },
          { title: "회화나무", value: "회화나무" },
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(400),
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
