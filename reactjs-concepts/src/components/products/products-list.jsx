import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';

const initialState = true;

function ProductList({name, city, listOfProducts}) {
    //useState
    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0);
    const [changeStyle, setChangeStyle] = useState(false);

    const handleToggleText = () => {
        setFlag(!flag);
    }

    //useEffect
    useEffect(()=>{
        setFlag(!flag);
        console.log("Run only once on page load");
        
        return () => {
            console.log("Component is unmounted");
        }
    },[]) //This will run on first page load

    useEffect(()=>{
        if(count === 10) setChangeStyle(true);
    },[count])
    console.log(changeStyle);

    const handleIncreaseCount = () => {
        setCount(count+1);
    }


    // function renderTextBlock(getFlag) {
    //     return getFlag ? (
    //         <h4>Name: {name}, City: {city}</h4>
    //     ) : (
    //         <h4>Hello World</h4>
    //     );
    // };

    // const renderTextBlock = flag ? 
    // (<h4>Name: {name}, City: {city}</h4>) : (<h4>Hello World</h4>);

    // let renderTextBlock = null;
    // if(flag) {
    //     renderTextBlock = <h4>Name: {name}, City: {city}</h4>;
    // } else {
    //     renderTextBlock = <h4>Hello World</h4>;
    // }

    return (
        <div>
            <h3 className="title">Ecommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {
                flag ? <h4>{name} and {city} </h4> : <h4>Hello</h4>
            }
            <div>
                <button style={{backgroundColor:changeStyle ? 'green' : 'red', color : changeStyle ? 'white' : 'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count:{count}</p>
            </div>

            {/* {renderTextBlock} */}
            <ul>
                {
                    listOfProducts.map((item, index) => (
                    <ProductItem 
                        singleProductItem={item}
                        key={index}
                    />
                ))
                }
            </ul>
        </div>
    );
}

export default ProductList;