import Blogpost from "@/components/Blogpost";
import React from "react";

const Blog = async () => {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <Blogpost posts={objResult} />
    </div>
  );
};

export default Blog;
