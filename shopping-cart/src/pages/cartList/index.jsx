import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import CartTile from "../../components/cartTile";

export default function CartList() {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {cartItems?.length ? (
            cartItems.map((singleCartItem) => (
              <CartTile singleCartItem={singleCartItem} />
            ))
          ) : (
            <h2>No Items Available in Cart Page. Please add some items!</h2>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-900 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap gap-4 text-sm font-bold">
              Total{" "}
              <span>
                ${" "}
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </p>
          </ul>
          <div className="mt-5 flex gap-2">
            <button
              disabled={cartItems.length === 0}
              className="disabled:opacity-65 text-sm px-4 py-3 bg-black text-white font-semibold"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/products")}
              className="text-sm px-4 py-3 bg-black text-white font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
