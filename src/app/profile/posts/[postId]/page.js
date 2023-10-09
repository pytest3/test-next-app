import React from "react";
import { posts } from "@/data/data";

export default function Post({ params }) {
  const { pageId } = params;
  const post = posts.filter((i) => i.id === pageId);
  return <div>{post.message}</div>;
}
