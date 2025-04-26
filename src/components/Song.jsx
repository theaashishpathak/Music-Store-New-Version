// import { useState } from "react";

// export const Song = ({ fn, song }) => {
//   console.log(song);
//   const [playerFlag, setPlayerFlag] = useState(false);

//   const showPlayer = () => {
//     setPlayerFlag(true); // Set playerFlag to true when showPlayer is called
//     fn(true, song);
//   };

//   return (
//     <div className="row">
//       <div className="col-4">
//         <img src={song.artworkUrl100} alt={song.trackName} />
//       </div>
//       <div className="col-4">
//         {song.artistName} {song.trackName}
//       </div>
//       <div className="col-4">
//         <button onClick={showPlayer} className="btn btn-primary">
//           Play Song
//         </button>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";

// export const Song = ({ fn, song }) => {
//   console.log(song);

//   const showPlayer = () => {
//     fn(true, song);
//   };

//   return (
//     <div className="row">
//       <div className="col-4">
//         <img src={song.artworkUrl100} alt={song.trackName} />
//       </div>
//       <div className="col-4">
//         {song.artistName} - {song.trackName}
//       </div>
//       <div className="col-4">
//         <button onClick={showPlayer} className="btn btn-primary">
//           Play Song
//         </button>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

export const Song = ({ fn, song }) => {
  console.log(song);
  const [playerFlag, setPlayerFlag] = useState(false);
  const showPlayer = () => {
    fn(true, song);
  };
  return (
    <div className="card">
        <img src={song.artworkUrl100} />
      <div className="col-4">
        {song.artistName} {song.trackName}
      </div>
      <div className="">
        <button onClick={showPlayer} className="btn btn-primary">
          Play Song
        </button>
      </div>
    </div>
  );
};
