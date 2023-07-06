import React from "react";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRcipe] = useState({});

  const fetchApi = async () => {
    const res = await getRecipe(recipeId);
    setRecipe(res);
  };

  useEffect(() => {
    fetchApi();
  }, []);
};
export default RecipreDetails;
