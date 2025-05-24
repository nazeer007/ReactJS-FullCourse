import CommonInput from "../common-input";

const formTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
}

export default function CommonForm({formControls=[], onHandleSubmit, formData, setFormData, buttonText}) {

    function renderFormElement(getCurrentElement) {
        
        let content = null;

        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput 
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    type={getCurrentElement.type}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    onChange={(event)=>setFormData({
                        ...formData,
                        [event.target.name]: event.target.value,
                    })}
                />
                break;
        
            default:
                content = <CommonInput 
                    label={getCurrentElement.label}
                    name={getCurrentElement.name}
                    id={getCurrentElement.id}
                    type={getCurrentElement.type}
                    placeholder={getCurrentElement.placeholder}
                    value={formData[getCurrentElement.name]}
                    onChange={(event)=>setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })}
                />
                break;
        }
        return content;
    }

    return (
        <form onSubmit={onHandleSubmit}>
            {
                formControls?.length 
                ? formControls.map((singleFormElementItems) => (
                    <div key={singleFormElementItems.id || singleFormElementItems.name}>{renderFormElement(singleFormElementItems)}</div>
                ))
                :null
            }
            <div style={{marginTop: '12px'}}>
                <button type="submit">{buttonText || 'Submit'}</button>
            </div>
        </form>
    );
}