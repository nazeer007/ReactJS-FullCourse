import { useState } from "react";

export default function FormComponent() {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name : '',
        email: ''
    })

    function handleInputChange(event) {
        console.log(event);
        const {value} = event.target;
        setNameValue(value);
    }

    function handleEmailChange(event) {
        console.log(event);
        const {value} = event.target;
        setEmailValue(value);        
    }

    function handleOnChange(event) {
        console.log(event.target.name);
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nameValue, emailValue, "nameValue");
    }

    console.log(formData);
    

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={formData.name} 
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(event)=> setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />

                <input 
                    type="email"
                    value={formData.email} 
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    // onChange={handleOnChange}
                    onChange={(event)=> setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}