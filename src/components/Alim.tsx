import { useState } from "react";
import qasimov from "../images/qasimov.png";
import tracea from "../images/tracea.png";
import haluk from "../images/haluk.png";
import qasimovs from "../images/qasimovs.png";
import erdogan from "../images/tayyip.png";

const Alim = () => {
  const [Image, setImage] = useState(qasimov);

  return (
    <div className="flex flex-col sm:flex-row w-full h-full h-[35rem]  ">
      <div
        className="w-[100%] sm:w-[50%] h-[35rem] bg-gradient-to-r from-black via-red-700  "
        style={{ borderRadius: "470px 0px 0px 30px" }}
      >
        <img src={Image} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div className="w-[100%] sm:w-[50%] h-[35rem] flex flex-col items-center gap-5">
        <h1 className="text-5xl text-white italic">ALİM QASİMOV</h1>
        <div className=" flex flex-col items-center text-white text-2xl">
          <div className=" -z-5 flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
            <h1>A Trace of Grace</h1>
            <audio
              className=""
              id="audioq1"
              onPlay={() => {
                setImage(tracea);
              }}
              controls
            >
              <source src="/public/grace.mp3" type="audio/mpeg" />
              Tarayıcınız audio etiketini desteklemiyor.
            </audio>
          </div>
        </div>
        <div className=" flex flex-col items-center text-white text-2xl">
          <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
            <h1>Bayati Şiraz</h1>
            <audio id="audioq2" onPlay={() => setImage(qasimovs)} controls>
              <source src="/public/Bayati.mp3" type="audio/mpeg" />
              Tarayıcınız audio etiketini desteklemiyor.
            </audio>
          </div>
        </div>
        <div className=" flex flex-col items-center text-white text-2xl">
          <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
            <h1>?!?!?!?!?</h1>
            <audio id="audioq3" onPlay={() => setImage(haluk)} controls>
              <source src="/public/bilginer.mp3" type="audio/mpeg" />
              Tarayıcınız audio etiketini desteklemiyor.
            </audio>
          </div>
        </div>
        <div className=" flex flex-col items-center text-white text-2xl">
          <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
            <h1>ALLAHIM NOLUYOOR!!??</h1>
            <audio id="audioq3" onPlay={() => setImage(erdogan)} controls>
              <source src="/public/erdogan.mp3" type="audio/mpeg" />
              Tarayıcınız audio etiketini desteklemiyor.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alim;
