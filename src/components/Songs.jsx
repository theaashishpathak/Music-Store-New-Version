import { Song } from "./Song";

export const Songs = ({ fn, allsongs }) => {
  console.log("*******All Songs ", allsongs);
  // map (JS)
  // allsongs (data) ---> convert --> JSX
  return (
    <>
      <div className="SongListDisplay">
      {allsongs.map((currentSong, index) => (
        <Song key={index} fn={fn} song={currentSong} />
      ))}
      </div>
    </>
  );
};
