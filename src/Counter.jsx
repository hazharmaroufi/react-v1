function Counter() {
  const countHandler = () => {
    console.log("count");
  };
  return <button onClick={countHandler}>count</button>;
}

export default Counter;
