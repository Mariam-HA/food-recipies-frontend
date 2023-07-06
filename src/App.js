import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
