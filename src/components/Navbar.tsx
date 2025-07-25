import amblem from "../images/turkic.png";
import alim from "../images/alim.jpg";
import munir from "../images/munir.png";
import muslum from "../images/muslum.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const images = [
    { img: alim, navigate: "/alim" },
    { img: munir, navigate: "/munir" },
    { img: muslum, navigate: "/muslum" },
  ];
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <header className="py-2 px-5 bg-gradient-to-r from-black via-red-700 to-black text-white shadow-md shadow-gray-500">
      <nav className="flex justify-between  items-center ">
        <div className="md:w-[219px] w-[100px] pl-5">
          <a href="#">
            <img
              className="rounded-full w-[70px] h-[70px] sm:w-[80px] sm:h-[80px]"
              src={amblem}
              alt=""
            />
          </a>
        </div>
        <h4 className=" text-1xl sm:text-2xl lg:text-4xl text font-playfair italic">
          Türk Dünyasından Müzik Enleri
        </h4>
        <ul className=" gap-3 hidden md:flex z-10 ">
          {images.map((image) => (
            <li className="">
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
        <div
          onClick={() => setClicked(!clicked)}
          className="relative w-[100px] flex justify-center items-center  md:hidden"
        >
          {<FaBars className="text-6xl cursor-pointer " />}
          <div
            className={
              clicked
                ? "absolute top-[4rem] bg-red-900 rounded-xl p-2 w-[8rem]"
                : "hidden"
            }
          >
            <ul className=" gap-1  grid grid-cols-2 grid-rows-2 ">
              {images.map((image) => (
                <li>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
