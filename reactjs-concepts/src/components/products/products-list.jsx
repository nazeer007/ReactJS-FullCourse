import ProductItem from "./components/product-item";
import './style.css';

function ProductList({name, city, listOfProducts}) {
    const flag = true;

    // function renderTextBlock(getFlag) {
    //     return getFlag ? (
    //         <h4>Name: {name}, City: {city}</h4>
    //     ) : (
    //         <h4>Hello World</h4>
    //     );
    // };

    // const renderTextBlock = flag ? 
    // (<h4>Name: {name}, City: {city}</h4>) : (<h4>Hello World</h4>);

    let renderTextBlock = null;
    if(flag) {
        renderTextBlock = <h4>Name: {name}, City: {city}</h4>;
    } else {
        renderTextBlock = <h4>Hello World</h4>;
    }

    return (
        <div>
            <h3 className="title">Ecommerce Project</h3>
            {renderTextBlock}
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