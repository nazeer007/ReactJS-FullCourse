import { useParams } from "react-router-dom";

export default function RecipeDetailsPage() {
    
    const params = useParams();
    console.log(params);
    
    const {id} = params
    
    return (
        <div>Recipe Details of item {id}</div>
    );
}