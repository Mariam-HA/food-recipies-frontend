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
import CreateCategory from "./pages/CreateCategory";
import Profile from "./pages/Profile";
import Info from "./pages/Info";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App min-h-screen">
        {user ? (
          <div>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/createCat" element={<CreateCategory />} />
              <Route path="/*" element={<Navigate to="/home" />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<Navigate to="/" />} />
              <Route path="/recipes/:recipeId" element={<Info />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}
export default App;
