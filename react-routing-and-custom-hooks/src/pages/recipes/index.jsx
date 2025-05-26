import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";

export default function RecipeList() {
  const location = useLocation();
  console.log(location);

  const { data, loading } = useFetch("https://dummyjson.com/recipes");
  if (loading) return <h3>Fetching recipes! Please wait</h3>;

  return (
    <div>
      <h2>Recipe List Page</h2>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes?.map((recipeItem) => (
              <div>
                <img src={recipeItem?.image} alt={recipeItem?.name} />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}
