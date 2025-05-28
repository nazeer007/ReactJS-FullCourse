import { useCallback, useState } from "react";
import Counter from "./counter";

export default function UseCallbackExample() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memorizeSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memorizeSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );
  return (
    <div>
      <h2>Use Callback</h2>
      <Counter countValue={countOne} onClick={memorizeSetCountOneFunc} />
      <Counter countValue={countTwo} onClick={memorizeSetCountTwoFunc} />
    </div>
  );
}
