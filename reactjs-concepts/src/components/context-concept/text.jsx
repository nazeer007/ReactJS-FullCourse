import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextTextComponent(){
    const {theme} = useContext(GlobalContext);
    console.log(theme);
    
    return (
        <h3 
        style={{
            fontSize: theme === 'light' ? '50px' : '100px', 
            backgroundColor: theme === 'light' ? 'white' : 'black', 
            color: theme === 'light' ? 'blue' : 'yellow'}}>
            Syed Nazeer
        </h3>
    );
}

export default ContextTextComponent;