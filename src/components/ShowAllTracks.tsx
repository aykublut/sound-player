import { allTracks } from "../tracks/Tracks";
import Music from "./Music";

const ShowAllTracks = () => {
  return (
    <div className="w-[100%] sm:w-[100%] h-[35rem] grid grid-cols-6 grid-rows-3  gap-5">
      {allTracks.map((track) => (
        <Music track={track} />
      ))}
    </div>
  );
};

export default ShowAllTracks;
