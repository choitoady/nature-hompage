import React, { useEffect, useState } from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { CgPlayPauseO } from "react-icons/cg";
import { HiPlayCircle } from "react-icons/hi2";
import { PiSpeakerSimpleHighFill } from "react-icons/pi";

export function TopNav() {
  const [audio] = useState(
    new Audio(
      process.env.PUBLIC_URL +
        "/rainy-day-in-town-with-birds-singing-194011.mp3"
    )
  );
  console.log(audio.duration);
  console.log(audio.volume);

  const [volume, setVolume] = useState(0.5); // 초기 볼륨을 0.5로 설정 (0.0 ~ 1.0)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [musicToggle, setMusicToggle] = useState(false);
  useEffect(() => {
    // 초기 볼륨 설정
    audio.volume = volume;

    // 오디오 메타데이터가 로드될 때 전체 시간 업데이트
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // 오디오 재생 중 현재 시간 업데이트
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audio]);

  const playMusic = () => {
    audio.play();
    setMusicToggle(true);
  };

  const pauseMusic = () => {
    audio.pause();
    setMusicToggle(false);
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-11/12 h-20 relative">
      <div className="w-full h-full flex items-center justify-around">
        <div className="w-3/6 flex">
          <div className="logoBox">
            <div className="text-slate-50 text-4xl mr-20">R.set</div>
          </div>
          <div className="text-gray-500 pt-4 pr-24">자연 TV</div>
          <div className="text-gray-500 pt-4">자연 사진</div>
        </div>{" "}
        <div>
          <input type="text" />
        </div>{" "}
        <div>
          <button className="text-white text-2xl" onClick={handleToggle}>
            <BiSolidPlaylist />
          </button>
        </div>
      </div>
      {toggle ? (
        <div className="absolute top-20 right-10 w-72 bg-zinc-600 rounded-md">
          <li className="list-none relative">
            <div className="flex flex-row-reverse">
              <div className="w-24 flex">
                <PiSpeakerSimpleHighFill />{" "}
                <input
                  type="range"
                  id="customRange1"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16"
                />{" "}
              </div>
            </div>{" "}
            <div className="mx-2">
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleTimeChange}
                className="w-64"
              />
            </div>{" "}
            <div className="flex flex-row-reverse">
              {" "}
              <div className="text-white text-xs ">
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime) % 60}ㅣ
                {Math.floor(duration / 60)}:{Math.floor(duration) % 60}
              </div>{" "}
            </div>
            <div className="inline absolute top-10 left-32">
              {musicToggle ? (
                <button className="text-white" onClick={pauseMusic}>
                  <CgPlayPauseO />
                </button>
              ) : (
                <button className="text-white" onClick={playMusic}>
                  <HiPlayCircle />
                </button>
              )}
            </div>
          </li>
        </div>
      ) : null}
    </div>
  );
}
