import { useEffect, useRef } from "react";

export default function Hooks() {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRefElement = useRef();
  function handleClick() {
    countValue.current++;
    console.log(countValue.current);
  }
  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRefElement.current.focus();
    getDivReference.style.color = "red";
    setTimeout(() => {
      getDivReference.style.color = "green";
      setTimeout(() => {
        getDivReference.style.color = "blue";
      }, 1000);
    }, 2000);
  }, []);
  return (
    <div>
      <h2>Use ref, use callback and use memo hook</h2>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divElementRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        molestias
      </div>
      <input type="text" name="name" placeholder="Enter your name" ref={inputRefElement} />
    </div>
  );
}
