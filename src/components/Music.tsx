import { FaPlay } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toAbout } from "../redux/musicSlice";
import { useNavigate } from "react-router-dom";

interface MusicProps {
  track: trackType;
}

interface trackType {
  content: string;
  photo: string;
  source: string;
  soyleyen: string;
}

const Music: React.FC<MusicProps> = ({ track }) => {
  const { content, photo } = track;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setMusicAbout = () => {
    dispatch(toAbout(track));
    navigate("/musicAbout");
  };
  return (
    <div
      style={{ backgroundImage: `url(${photo})` }}
      className="w-[11.5rem] h-[11rem] rounded-xl  bg-cover bg-center"
    >
      <div className="w-[100%] h-[30%] flex justify-center items-center musicCardContent text-white">
        {content}
      </div>
      <div className="w-[100%] h-[70%] flex justify-center items-center musicCard">
        <FaPlay
          onClick={setMusicAbout}
          className="text-slate-600 text-5xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Music;
