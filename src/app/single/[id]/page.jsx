import Single from "@/components/Single";
import Image from "next/image";

const SinglePost = async ({ params }) => {
  const { id } = params;
  const Data = await fetch(`https://dev.to/api/articles/${id}`);
  const result = await Data.json();
  return (
    <div>
      <Single result={result} />
    </div>
  );
};
export default SinglePost;
