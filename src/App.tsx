import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sayfaları lazy yükle
const Alim = lazy(() => import("./components/Alim"));
// import lazy(Alim) from './components/Alim' meali bu

const Munir = lazy(() => import("./components/Munir"));
const Muslum = lazy(() => import("./components/Muslum"));
const MusicAbout = lazy(() => import("./components/MusicAbout"));
const ShowAllTracks = lazy(() => import("./components/ShowAllTracks"));
const Aykut = lazy(() => import("./components/Aykut"));

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Uygulama açıldığında sadece bir kere çalışır");
    navigate("/");
  }, []);

  return (
    <div className="min-h-screen max-container bg-gradient-to-l from-[#2A2A2A] via-[#2a2929] to-[#250b0b2f]">
      <Navbar />

      <Suspense
        fallback={
          <div className="text-white text-center mt-10">Yükleniyor...</div>
        }
      >
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<ShowAllTracks />} />
            <Route path="/adminMusic" element={<Aykut />} />
            <Route path="/munir" element={<Munir />} />
            <Route path="/alim" element={<Alim />} />
            <Route path="/muslum" element={<Muslum />} />
            <Route path="/musicAbout" element={<MusicAbout />} />
            <Route path="*" element={<ShowAllTracks />} />
          </Routes>
        </div>
      </Suspense>
      <div className=" mt-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
