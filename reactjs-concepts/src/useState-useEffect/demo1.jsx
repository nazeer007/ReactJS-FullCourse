import { useEffect, useState } from "react";

const initialState = false;
const UseStateUseEffectDemo = () => {
    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

    const handleToggleText = () => {
        setFlag(!flag);
    }

    //useEffect
    useEffect(()=>{
        setFlag(!flag);
    },[])

    useEffect(()=>{
        if(count === 10) setChangeStyle(true);
    }, [count])

    const handleIncreaseCount = () => {
        setCount(count+1);
    }

    return(
        <div>
            <h2>useState and useEffect Practice</h2>
            <button onClick={handleToggleText}>Toggle Text</button>
            {
                flag ? <h4>Hello Welcome to React!</h4> : <h4>Hello world!</h4>
            }

            <div>
                <button style={{backgroundColor: changeStyle ? 'green' : 'red', color : changeStyle ? 'white' : 'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count:{count} </p>
            </div>
        </div>
    );
}

export default UseStateUseEffectDemo;