import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";


const Reviews = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = "kvU0wmuGrEo"; // Your YouTube video ID
  
    const handlePlay = () => {
      setIsPlaying(true);
    };
  return (
    <div>
      <div className="layout py-12">
        <h1 className="heading text-tertiary text-center">
          What Our Happy Clients Say About Us
        </h1>
        <div className="flex flex-col md:flex-row  justify-center gap-10 py-6">
          {/* <div className="relative">
        

            <iframe
              src="https://www.youtube.com/embed/kvU0wmuGrEo"
              className="md:w-[240px] md:h-[320px] w-full rounded-lg shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 flex flex-col items-center justify-center -bottom-[10rem] ">
              <div className="text-black  text-lg bg-white  px-5 py-2 rounded-[30px]">
                <div className="flex items-center gap-1">
                  <FaPlay size={15} />
                  <p className="text-sm">Play</p>
                </div>
              </div>
              <h1 className="text-white font-bold text-xl pt-2">Angelina P</h1>
              <p className="text-white font-medium ">CEO of Pinnacle Media</p>
            </div>
          </div> */}

<div className="relative">
      <iframe
        src={isPlaying ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : ""}
        className="md:w-[240px] md:h-[320px] w-full rounded-lg shadow-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center review justify-center ">
          <button
            className="text-black text-lg bg-white px-5 py-2 rounded-[30px] flex items-center gap-1"
            onClick={handlePlay}
          >
            <FaPlay size={15} />
            <p className="text-sm">Play</p>
          </button>
        </div>
      )}

      <div className="absolute  inset-x-0 bottom-12 text-center">
        <h1 className="text-white font-bold text-xl pt-2">Angelina P</h1>
        <p className="text-white font-medium">CEO of Pinnacle Media</p>
      </div>
    </div>

          <div className="relative">
            <Image
              src="/Angelina-P.webp"
              alt="Tidi-G"
              className="md:w-[240px] md:h-[320px] w-full  rounded-lg shadow-lg "
              width={200}
              height={200}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center -bottom-[10rem] ">
              <div className="text-black  text-lg bg-white  px-5 py-2 rounded-[30px]">
                <div className="flex items-center gap-1">
                  <FaPlay size={15} />
                  <p className="text-sm">Play</p>
                </div>
              </div>
              <h1 className="text-white font-bold text-xl pt-2">Tidi G</h1>
              <p className="text-white font-medium">CEO of WebHiveDigital</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/Angelina-P.webp"
              alt="Emmalee-S"
              className="md:w-[240px] md:h-[320px] w-full rounded-lg shadow-lg "
              width={200}
              height={200}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center -bottom-[10rem] ">
              <div className="text-black  text-lg bg-white  px-5 py-2 rounded-[30px]">
                <div className="flex items-center gap-1">
                  <FaPlay size={15} />
                  <p className="text-sm">Play</p>
                </div>
              </div>
              <h1 className="text-white font-bold text-xl pt-2">Emmalee S</h1>
              <p className="text-white font-medium">CEO of Simply Digital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
