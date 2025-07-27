import amblem from "../images/turkic.png";
import alim from "../images/alim.jpg";
import munir from "../images/munir.png";
import muslum from "../images/muslum.png";
import aykut from "../images/aykut.jpg";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
  const images = [
    { img: alim, navigate: "/alim", id: "1" },
    { img: munir, navigate: "/munir", id: "2" },
    { img: muslum, navigate: "/muslum", id: "3" },
  ];
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  const [changedTitle, setChangedTitle] = useState<boolean>(false);
  const [icon, setIcon] = useState(amblem);

  useEffect(() => {
    if (changedTitle) {
      navigate("/adminMusic");
      setIcon(aykut);
    } else {
      navigate("/");
      setIcon(amblem);
    }
  }, [changedTitle]);
  const turkMuzikleriAmblemFonksiyon = () => {
    if (changedTitle) {
      navigate("/adminMusic");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="py-3 px-6 relative bg-gradient-to-r from-[#2A2A2A] via-[#3A2A2A] to-[#2A2A2A] text-white shadow-md shadow-black/30 backdrop-blur-sm">
      <nav className="flex justify-between  items-center ">
        <div className="md:w-[219px] w-[100px] pl-2 sm:pl-5">
          <a onClick={() => turkMuzikleriAmblemFonksiyon()}>
            <img
              className="rounded-full w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] cursor-pointer"
              src={icon}
              alt=""
            />
          </a>
        </div>
        <h4 className=" text-base relative flex text-center justify-center items-center sm:text-2xl md:text-[1.3rem] lg:text-4xl  font-playfair italic">
          {changedTitle
            ? "Aykut'un Müzik Derlemeleri"
            : "Türk Dünyasından Müzik Enleri"}
          <IoMdArrowDropdown
            onClick={() => setChangedTitle(!changedTitle)}
            className="absolute top-10 cursor-pointer"
          />
        </h4>
        <div className={changedTitle ? "hidden" : "block"}>
          <ul className=" gap-3 hidden md:flex z-10 ">
            {images.map((image) => (
              <li key={image.id} className="">
                <a
                  className="cursor-pointer"
                  onClick={() => navigate(`${image.navigate}`)}
                >
                  <img
                    className="w-[65px] h-[65px] rounded-full p-[2px] bg-red-950 border-white border"
                    src={image.img}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={changedTitle ? "md:w-[219px]" : "hidden w-0"}></div>
        <div
          onClick={() => setClicked(!clicked)}
          className=" w-[100px] flex justify-center items-center  md:hidden"
        >
          {<FaBars className="text-6xl cursor-pointer " />}
          <div
            className={
              clicked
                ? "z-10 absolute top-[4.5rem] bg-red-900 rounded-xl p-2 w-[8rem]"
                : "hidden"
            }
          >
            {
              <ul className=" gap-1   grid grid-cols-3 grid-rows-1 ">
                {images.map((image) => (
                  <li key={image.id}>
                    <a
                      className="cursor-pointer"
                      onClick={() => navigate(`${image.navigate}`)}
                    >
                      <img
                        className="w-[35px] h-[35px] rounded-full p-[2px] bg-red-950 border-white border"
                        src={image.img}
                        alt=""
                      />
                    </a>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
