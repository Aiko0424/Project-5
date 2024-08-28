import Image from "next/image";
import HomeSlider from "../components/HomeSlider";
import HomeTrending from "../components/HomeTrending";
import HomeAllPost from "../components/HomeAllPost";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeTrending />
      <HomeAllPost />
    </>
  );
}
