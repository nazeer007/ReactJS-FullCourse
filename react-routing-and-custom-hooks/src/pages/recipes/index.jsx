import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import useWindowResize from "../../hooks/use-window-resize";

export default function RecipeList() {
  const location = useLocation();
  //   console.log(location);

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");
  const windowSize = useWindowResize();

  if (loading) return <h3>Fetching recipes! Please wait</h3>;

  return (
    <div>
      <h2 style={{ color: windowSize.width < 768 ? "red" : "black" }}>
        Recipe List Page
      </h2>
      <h3>
        Current window width is {windowSize.width} and Current height is{" "}
        {windowSize.height}{" "}
      </h3>
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
