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

import Profile from "./pages/Profile";
import Info from "./pages/Info";
import RecipesPage from "./pages/RecipesPage";
import IngredientInput from "./components/IngredientInput";

import AddRecipe from "./pages/AddRecipe";
import RecipesByCategory from "./components/RecipesByCategory";
import RecipeDetails from "./pages/RecipeDetails";

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
            {/* for signin users */}
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/recipes/:recipeId" element={<Info />} />

              <Route path="/ingredients" element={<IngredientInput />} />
              <Route path="/addrecipe" element={<AddRecipe />} />
              <Route path="/recipe" element={<RecipesPage />} />
              <Route
                path="/recipedetails/:recipeId"
                element={<RecipeDetails />}
              />

              {/* <Route path="/recipeform" element={<RecipeForm />} /> */}
            </Routes>
          </div>
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/home" element={<Home />} />

              <Route path="/categories" element={<Categories />} />

              <Route path="/*" element={<>Page Not Found</>} />
            </Routes>
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}
export default App;
