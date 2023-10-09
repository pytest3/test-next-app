import React from "react";
import { posts } from "@/data/data";

export default function ({ params }) {
  const { postId } = params;
  const post = posts.filter((i) => {
    return Number(i.id) === Number(postId);
  })[0];

  return <div>{post.message}</div>;
}
