import { useLocation } from "react-router-dom";


export default function RecipeList() {

    const location = useLocation();
    console.log(location);
    

    return (
        <div>
            <h2>Recipe List Page</h2>
        </div>
    );
}