import aykut from "../images/aykut.jpg";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gradient-to-r from-gray-900 via-red-900 to-black text-white text-center rounded-sm flex justify-center items-center gap-1   ">
      <a
        className="cursor-pointer"
        href="https://github.com/aykublut/sound-player"
        target="_blank"
      >
        <img
          className="w-[65px] h-[65px] rounded-full p-[2px] bg-red-950 border-white border"
          src={aykut}
          alt=""
        />
      </a>
      <h3 className="text-1xl">
        {" "}
        --- https://github.com/aykublut/sound-player
      </h3>
    </footer>
  );
};

export default Footer;
