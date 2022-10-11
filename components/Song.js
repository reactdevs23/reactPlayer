import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="flex flex-col justify-center items-center songContainerHeight">
      <img
        className={`animate-rotating-image md:w-1/5  w-3/5 rounded-full  ${
          isPlaying ? "running" : "pause"
        }`}
        style={{}}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2 className="text-blackColor px-4 pt-12 pb-4 text-2xl font-bold">
        {currentSong.name}
      </h2>
      <h3 className="text-grayColor text-xl">{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
