import { Link } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [ flag, setFlag ] = useState(false);

  function filterProductByPrice(getProducts) {
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  }

  const memorizedVersion = useMemo(
    () => filterProductByPrice(data?.products), [data?.products]
  )

  if (loading) return <h2>Loading data! Please wait</h2>;
  console.log(data);

  return (
    <div>
      <h2 style={{ color: flag ? "red" : "black" }}>Use Memo</h2>
      <button onClick={()=> setFlag(!flag)}>Toggle Flag</button>
      <ul>
        {memorizedVersion.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
