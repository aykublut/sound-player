import Alim from "./components/Alim";
import Munir from "./components/Munir";
import Muslum from "./components/Muslum";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-neutral-900 via-zinc-800 to-neutral-700">
      <div className="max-container">
        <Navbar />
      </div>
      <div className="max-container mt-5">
        <Routes>
          <Route path="/munir" element={<Munir />} />
          <Route path="/alim" element={<Alim />} />
          <Route path="/muslum" element={<Muslum />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
