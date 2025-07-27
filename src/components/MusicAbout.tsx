import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const MusicAbout = () => {
  const { thatMusic } = useSelector((store: RootState) => store.music);
  const { content, photo, source, soyleyen } = thatMusic;
  return (
    <div className="flex  w-full h-full   ">
      <div
        className="w-[50%]  h-[35rem] bg-gradient-to-r from-black via-red-700  "
        style={{ borderRadius: "470px 0px 0px 30px" }}
      >
        <img src={photo} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div className="w-[50%] relative  h-[35rem]  gap-5">
        <div className="w-full h-full -z-5 flex flex-col pt-5 items-center gap-2 bg-gradient-to-l from-neutral-900 via-zinc-800 text-white rounded-e-[2rem] ">
          <h1
            className={
              soyleyen == "ALİM QASİMOV & FERGANE QASİMOVA"
                ? "text-3xl"
                : "text-5xl"
            }
          >
            {soyleyen}
          </h1>
          <h2 className="text-4xl italic text-white/80">{content}</h2>

          <audio autoPlay className="w-[97%] absolute bottom-3 left-1" controls>
            <source src={source} type="audio/mpeg" />
            Tarayıcınız audio etiketini desteklemiyor.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default MusicAbout;
