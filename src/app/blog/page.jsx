import { BlogAllPost } from "@/components/BlogAllPost";
import React from "react";

const Blog = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <BlogAllPost posts={objResult} />
    </div>
  );
};

export default Blog;
