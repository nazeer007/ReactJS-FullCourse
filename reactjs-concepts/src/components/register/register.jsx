import { useState } from "react";
import CommonForm from "../common-form";
import { registerFormElements } from "../../config";

const initialRegisterFormData = {
    name: '',
    email: '',
    password: ''
}

export default function RegisterComponent() {

    const [registerFormData, setRegisterFormData] = useState(initialRegisterFormData);

    function handleRegisterOnSubmit(event) {
        event.preventDefault();
        console.log(registerFormData);
        setRegisterFormData(initialRegisterFormData);
    }

    return (
        <div>
            <h2>Register</h2>
            <CommonForm 
                formControls={registerFormElements}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                buttonText={'Register'}
                onHandleSubmit={handleRegisterOnSubmit}
            />
        </div>
    );
}