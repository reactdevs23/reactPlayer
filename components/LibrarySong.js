// import React from "react";

// const LibrarySong = ({
//   song,
//   songs,
//   setCurrentSong,
//   id,
//   audioRef,
//   isPlaying,
//   setSongs,
// }) => {
//   //Handler
//   const songSelectHandler = async () => {
//     const selectSong = songs.filter((state) => state.id === id);
//     await setCurrentSong(selectSong[0]);
//     // Add Active State
//     const newSong = songs.map((song) => {
//       if (song.id === id) {
//         return {
//           ...song,
//           active: true,
//         };
//       } else {
//         return {
//           ...song,
//           active: false,
//         };
//       }
//     });
//     setSongs(newSong);
//     // check if the song is playing
//     if (isPlaying) audioRef.current.play();
//   };
//   return (
//     <div
//       onClick={songSelectHandler}
//       className={`library-song ${song.active ? "selected" : ""}`}
//     >
//       <img src={song.cover} alt={song.name} />
//       <div className="song-description">
//         <h3>{song.name}</h3>
//         <h4>{song.artist}</h4>
//       </div>
//     </div>
//   );
// };

// export default LibrarySong;

import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //Handler
  const songSelectHandler = async () => {
    const selectSong = songs.filter((state) => state.id === id);
    await setCurrentSong(selectSong[0]);
    // Add Active State
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSong);
    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`flex items-center cursor-pointer px-8 py-4 ease-in transition-all duration-300  hover:bg-hoverColor 
      }`}
      style={{ background: song.active && "rgb(196, 200, 223)" }}
    >
      <img src={song.cover} alt={song.name} className="w-4/12 md:w-4/12 " />
      <div className=" pl-4">
        <h3 className=" text-base text-grayColor">{song.name}</h3>
        <h4 className="text-xs text-grayColor">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
