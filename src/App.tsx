import Alim from "./components/Alim";
import Munir from "./components/Munir";
import Muslum from "./components/Muslum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import MusicAbout from "./components/MusicAbout";
import ShowAllTracks from "./components/ShowAllTracks";
import Aykut from "./components/Aykut";

function App() {
  return (
    <div className=" min-h-screen max-container bg-gradient-to-l from-[#2A2A2A] via-[#2a2929] to-[#250b0b2f]">
      <div className="">
        <Navbar />
      </div>
      <div></div>

      <div className=" mt-5">
        <Routes>
          <Route path="/adminMusic" element={<Aykut />} />
          <Route path="/" element={<ShowAllTracks />} />
          <Route path="*" element={<ShowAllTracks />} />
          <Route path="/munir" element={<Munir />} />
          <Route path="/alim" element={<Alim />} />
          <Route path="/muslum" element={<Muslum />} />
          <Route path="/musicAbout" element={<MusicAbout />} />
        </Routes>
      </div>

      <div className=" mt-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
