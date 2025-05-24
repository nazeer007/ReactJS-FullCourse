

export default function CommonInput({type ,label, name, id, placeholder, value, onChange}) {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input 
                type={type || 'text'} 
                name={name} 
                id={id} 
                placeholder={placeholder || 'Enter value here'} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}