// import Image from "next/image";

import Infintescroll from "@/components/infintescroll";
import HorizontalScroll from "@/components/infintescroll";
import Productcard from "@/components/productcard";

export default function Home() {
  const words = [
    { src: "/images/nochemicals.png", name: "Mustard Oil" },
    { src: "/images/nochemicals.png", name: "Coconut Oil" },
    { src: "/images/nochemicals.png", name: "Coconut Oil" },
  ];
  return (
    <>
      <div className="flex flex-col h-screen  justify-center items-center bg-mbackg">
        {/* <div className="flex  items-center justify-center bg-gray-100">

          <div className=" max-w-[1200px] overflow-hidden">
            <div className="flex animate-marquee gap-8 p-[80px]">
              <p className="text-2xl whitespace-nowrap">Word 1</p>
              <p className="text-2xl whitespace-nowrap">Word 2</p>
              <p className="text-2xl whitespace-nowrap">Word 3</p>
              <p className="text-2xl whitespace-nowrap">Word 4</p>
              <p className="text-2xl whitespace-nowrap">Word 5</p>
              <p className="text-2xl whitespace-nowrap">Word 6</p>

              <p className="text-2xl whitespace-nowrap">Word 1</p>
              <p className="text-2xl whitespace-nowrap">Word 2</p>
              <p className="text-2xl whitespace-nowrap">Word 3</p>
              <p className="text-2xl whitespace-nowrap">Word 4</p>
              <p className="text-2xl whitespace-nowrap">Word 5</p>

              <p className="text-2xl whitespace-nowrap">Word 1</p>
              <p className="text-2xl whitespace-nowrap">Word 2</p>
              <p className="text-2xl whitespace-nowrap">Word 3</p>
              <p className="text-2xl whitespace-nowrap">Word 4</p>
              <p className="text-2xl whitespace-nowrap">Word 5</p>
            </div>
          </div>
        </div> */}
        <Infintescroll />
      </div>
    </>
  );
}
