import Image from "next/image";
import HomeSlider from "../components/HomeSlider";
import HomeTrending from "../components/HomeTrending";
import { HomeAllpost } from "@/components/HomeAllPost";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <>
      <HomeSlider />
      <HomeTrending />
      <HomeAllpost posts={objResult} />
    </>
  );
}
