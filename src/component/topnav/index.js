import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiSoundOn } from "react-icons/gi";

export function TopNav() {
  const [audio] = useState(
    new Audio("./rainy-day-in-town-with-birds-singing-194011.mp3")
  );

  const playMusic = () => {
    audio.play();
  };

  const pauseMusic = () => {
    audio.pause();
  };
  return (
    <div className="w-11/12 h-20 relative">
      <div className="w-full h-full flex items-center justify-between">
        <div className="w-3/6 flex">
          <div className="logoBox">
            <div className="text-slate-50 text-4xl mr-20">R.set</div>
          </div>
          <div className="text-gray-500 pt-4 pr-24">자연 TV</div>
          <div className="text-gray-500 pt-4">자연 사진</div>
        </div>
        <div>
          <button className="text-white text-2xl">
            <CiSearch />
          </button>
          <button className="text-white text-2xl">
            <GiSoundOn />
          </button>
        </div>
      </div>
      <div className="absolute top-20 right-0 w-12">
        <button className="text-white" onClick={playMusic}>
          Play Music
        </button>
        <button className="text-white" onClick={pauseMusic}>
          Pause Music
        </button>
      </div>
    </div>
  );
}
