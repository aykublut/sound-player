import { tracksAlim } from "../tracks/Tracks";
import Music from "./Music";

const Alim = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full pl-[3.5rem] sm:pl-0  ">
      {/* <div
        className="w-[100%] sm:w-[50%] h-[35rem] bg-gradient-to-r from-black via-red-700  "
        style={{ borderRadius: "470px 0px 0px 30px" }}
      >
        <img src={Image} className="w-[100%] h-[100%]" alt="" />
      </div> */}
      <div
        className="w-[100%] sm:w-[100%] lg:h-[45rem] xl:h-[35rem] md:h-[35rem] sm:h-[50rem] h-[70rem]  grid grid-cols-2 grid-rows-6 lg:grid-cols-5 lg:grid-rows-4 xl:grid-cols-6 xl:grid-rows-3 md:grid-cols-4 md:grid-rows-3 sm:grid-cols-3 sm:grid-rows-4 sm:px-2 sm:gap-5
      gap-5  sm:p-2"
      >
        {/* <h1
          className={` text-white italic ${
            sarkici == "ALİM QASİMOV & FERGANE QASİMOVA"
              ? "text-3xl"
              : "text-5xl"
          }`}
        >
          {sarkici}
        </h1> */}
        {tracksAlim.map((track) => (
          // <div className=" flex flex-col items-center text-white text-2xl">
          //   <div className=" -z-5 flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-slate-700 via-red-800 to-black styledRadius">
          //     <h1>{track.content}</h1>
          //     <audio
          //       className=""
          //       onPlay={() => {
          //         setImage(track.photo);
          //         setSarkici(track.soyleyen);
          //       }}
          //       controls
          //     >
          //       <source src={track.source} type="audio/mpeg" />
          //       Tarayıcınız audio etiketini desteklemiyor.
          //     </audio>
          //   </div>
          // </div>
          <Music track={track} />
        ))}
      </div>
    </div>
  );
};

export default Alim;
