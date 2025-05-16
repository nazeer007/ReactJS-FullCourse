import { /*useEffect,*/ useState } from "react";
import '../data-fetching-using-useEffect/styles.css';

export default function Products() {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchAllProducts() {
        try {
            setLoading(true);
            const apiResponse = await fetch('https://dummyjson.com/products');
            const result = await apiResponse.json();
            console.log(result);

            if(result?.products){
                setProductsList(result?.products);
                setLoading(false);
            } else {
                setProductsList([]);
            }
        } catch(error) {
            console.log(error);
        }
    }

    // function handleFetchListOfProducts() {
    //     fetchAllProducts();
    // }

    // useEffect(()=>{
    //     fetchAllProducts();
    // }, []);

    console.log(productsList);
    if(loading) {
        return <h3>Fetching Products. Please Wait</h3>
    }
    
    return (
        <div>
            <h2>Products</h2>
            <button onClick={fetchAllProducts}>Fetch Products</button><br />
            <div className="products">
                {
                    productsList && productsList.length > 0 ?
                    productsList.map(productItem => <div key={productItem?.id} className="product-item">
                        <h4>{productItem?.title}</h4>
                        <img src={productItem?.thumbnail} alt={productItem?.title} />
                        <p>{productItem?.description}</p>
                    </div>) : <p>No Products Found!</p>
                }
            </div>
        </div>
    );
}