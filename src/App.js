import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(true);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        {user ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />

              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </UserContext.Provider>
    </div>
  );
}
export default App;
