import { useDispatch } from "react-redux";
import { tracksMuslum } from "../tracks/Tracks";

import Music from "./Music";
import { useEffect } from "react";
import { setChangedTitle } from "../redux/musicSlice";

const Muslum = () => {
  const title = document.querySelector("#title") as HTMLTitleElement;
  title.textContent = "Yerli Spotify";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setChangedTitle(false));
  }, []);
  return (
    <div className="pl-[3.5rem] sm:pl-0">
      <div
        className="w-[100%] sm:w-[100%] lg:h-[45rem] xl:h-[35rem] md:h-[35rem] sm:h-[55rem] h-[70rem]  grid grid-cols-2 grid-rows-6 lg:grid-cols-5 lg:grid-rows-4 xl:grid-cols-6 xl:grid-rows-3 md:grid-cols-4 md:grid-rows-3 sm:grid-cols-3 sm:grid-rows-4 sm:px-2 sm:gap-5
      gap-5  sm:p-2"
      >
        {tracksMuslum.map((track) => (
          <Music track={track} key={track.content} />
        ))}
      </div>
    </div>
  );
};

export default Muslum;
