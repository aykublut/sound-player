import Alim from "./components/Alim";
import Munir from "./components/Munir";
import Muslum from "./components/Muslum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music";
import MusicAbout from "./components/MusicAbout";
import ShowAllTracks from "./components/ShowAllTracks";

function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-neutral-900 via-zinc-800 to-neutral-700">
      <div className="max-container">
        <Navbar />
      </div>
      <div></div>

      <div className="max-container mt-5">
        <Routes>
          <Route path="/" element={<ShowAllTracks />} />
          <Route path="*" element={<ShowAllTracks />} />
          <Route path="/munir" element={<Munir />} />
          <Route path="/alim" element={<Alim />} />
          <Route path="/muslum" element={<Muslum />} />
          <Route path="/musicAbout" element={<MusicAbout />} />
        </Routes>
      </div>

      <div className="max-container mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
