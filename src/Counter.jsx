import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);
  const countHandler = () => {
    setCounter((counter) => counter + 1);
  };
  const showHandler = () => {
    setShow(true);
  };
  const hideHandler = () => {
    setShow(false);
  };
  return (
    <>
      <button onClick={showHandler}>show</button>
      <button onClick={hideHandler}>hide</button>
      {show && (
        <div>
          <p>counter</p>
          <p>{counter}</p>
          <button onClick={countHandler}>count</button>
        </div>
      )}
    </>
  );
}

export default Counter;
