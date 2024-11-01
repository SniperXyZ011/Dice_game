import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PlayGround from "./components/PlayGround";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/play-ground" element={<PlayGround/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
