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
import Categories from "./pages/Categories";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
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
              <Route path="/categories" element={<Categories />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </div>
    </UserContext.Provider>
  );
}
export default App;
