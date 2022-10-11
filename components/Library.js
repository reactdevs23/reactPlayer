// import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div
      className={` fixed top-0 left-0 h-full bg-white w-full md:w-80 overflow-scroll opacity-0 transition-all ease duration-500 ${
        libraryStatus ? "translate-x-0	 opacity-100" : ""
      }`}
      style={{
        transform: !libraryStatus ? "translate(-100%)" : "translate(0%)",
        boxShadow: "2px 2px 50px rgb(204, 204, 204)",
      }}
    >
      <h2 className="p-8 text-blackColor text-3xl font-sans font-bold">
        Library
      </h2>
      <div className="">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
