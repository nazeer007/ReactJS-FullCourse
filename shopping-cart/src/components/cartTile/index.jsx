import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);
  return (
    <Fragment>
      <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
            <img
              src={singleCartItem?.thumbnail}
              alt={singleCartItem?.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              {singleCartItem?.title}
            </h3>
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, true)}
              className="text-sm px-4 py-3 bg-black text-white font-semibold"
            >
              Remove
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Price: ${singleCartItem?.totalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-semibold text-[16px]">
            Quantity: {singleCartItem?.quantity}
          </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleRemoveFromCart(singleCartItem, false)}
              className="disabled:opacity-65 text-sm bg-slate-100 border-[#333] text-black font-semibold"
              disabled={singleCartItem?.quantity === 1}
            >
              -
            </button>
            <button
              onClick={() => handleAddToCart(singleCartItem)}
              className="text-sm  bg-slate-100 border-[#333] text-black font-semibold"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}
