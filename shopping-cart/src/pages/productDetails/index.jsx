import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

export default function ProductDetails() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const { setProductDetails, handleAddToCart, cartItems } =
    useContext(ShoppingCartContext);

  const [productDetails, setLocalProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProductDetails() {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();
      if (result) {
        setLocalProductDetails(result);
        setProductDetails(result); // update context if needed elsewhere
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to fetch product", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading || !productDetails) {
    return <h3>Product Details Loading! Please wait</h3>;
  }

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl max-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-6 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productDetails?.images?.map((imageItem) => (
                <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                  <img
                    className="w-24 cursor-pointer"
                    src={imageItem}
                    alt="Product Secondary"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold">{productDetails?.title}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-semibold">${productDetails?.price}</p>
            </div>
            <div>
              <button
                disabled={
                  productDetails
                    ? cartItems.findIndex(
                        (item) => item.id === productDetails.id
                      ) > -1
                    : false
                }
                onClick={() => handleAddToCart(productDetails)}
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
