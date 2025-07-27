import { useEffect } from "react";

import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const MusicAbout = () => {
  const { thatMusic } = useSelector((store: RootState) => store.music);
  const { content, photo, source, soyleyen } = thatMusic;

  useEffect(() => {
    const title = document.querySelector("#title") as HTMLTitleElement;
    title.textContent = `${content} şarkısı çalınıyor...`;
  }, []);

  return (
    <div className="flex  w-full h-full   ">
      <div
        className="w-[100%] md:w-[50%]  relative h-[35rem] bg-gradient-to-r from-black/50 via-red-900/40  "
        style={{ borderRadius: "470px 0px 0px 30px" }}
      >
        <img src={photo} className=" w-[100%] h-[100%]" alt="" />
      </div>
      <div className="w-[100%] max-md:absolute left-0 md:w-[50%]   h-[35rem]  gap-5">
        <div className="w-full h-full -z-5 flex flex-col pt-5 justify-between items-center gap-2 md:playerDiv text-white rounded-e-[2rem] ">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={
                soyleyen == "ALİM QASİMOV & FERGANE QASİMOVA"
                  ? "text-3xl text-center"
                  : "text-5xl text-center"
              }
            >
              {soyleyen}
            </h1>
            <h2 className="text-4xl italic text-white/80">{content}</h2>
          </div>

          <audio autoPlay className="w-[95%] " controls>
            <source src={source} type="audio/mpeg" />
            Tarayıcınız audio etiketini desteklemiyor.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default MusicAbout;
