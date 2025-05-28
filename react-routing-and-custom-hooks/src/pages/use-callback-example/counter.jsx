import { memo } from "react";

function Counter({ countValue, onClick }) {
  console.log("This is getting render", countValue, onClick);

  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);
