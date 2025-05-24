import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialFormData = {
    email: "",
    password: ""
}

export default function LoginComponent() {

    const [loginFormData, setLoginFormData] = useState(initialFormData);
    console.log(loginFormData, "loginFormData");
    
    function onHandleSubmit(event) {
        event.preventDefault();
        console.log(loginFormData, "loginFormData");
        
        setLoginFormData(initialFormData);
    }

    return (
        <div>
            <h2>Login Page</h2>
            <CommonForm 
                formData={loginFormData} 
                setFormData={setLoginFormData} 
                formControls={loginFormElements} 
                buttonText={"Login"}
                onHandleSubmit={onHandleSubmit}
            />
        </div>
    );
}