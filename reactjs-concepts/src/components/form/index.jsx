import { useState } from "react";

export default function FormComponent() {
    const [nameValue, setNameValue] = useState("");

    function handleInputChange(event) {
        console.log(event);
        const {value} = event.target;
        setNameValue(value);
    }
    
    return (
        <div>
            <h2>Form</h2>
            <input 
                value={nameValue} 
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
            />
        </div>
    );
}