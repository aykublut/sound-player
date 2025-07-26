import { useState } from "react";
import { tracksMuslum } from "../tracks/Tracks";
import muslum from "../images/muslumm.png";

const Muslum = () => {
  const [Image, setImage] = useState(muslum);

  return (
    <div className="flex flex-col sm:flex-row w-full h-full   ">
      <div
        className="w-[100%] sm:w-[50%] h-[35rem] bg-gradient-to-r from-black via-red-700  "
        style={{ borderRadius: "470px 0px 0px 30px" }}
      >
        <img src={Image} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div className="w-[100%] sm:w-[50%] h-[35rem] flex flex-col items-center gap-5">
        <h1 className="text-5xl text-white italic">MÜSLÜM GÜRSES</h1>
        {tracksMuslum.map((track) => (
          <div className=" flex flex-col items-center text-white text-2xl">
            <div className=" -z-5 flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
              <h1>{track.content}</h1>
              <audio
                className=""
                onPlay={() => {
                  setImage(track.photo);
                }}
                controls
              >
                <source src={track.source} type="audio/mpeg" />
                Tarayıcınız audio etiketini desteklemiyor.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muslum;
