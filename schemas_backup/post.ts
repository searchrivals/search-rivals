import { defineType } from "sanity"

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "content", type: "text", title: "Content" },
  ],
})
