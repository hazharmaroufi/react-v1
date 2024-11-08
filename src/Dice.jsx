function Dice() {
  return (
    <>
      <span>You got the number </span>
      <span>{Math.floor(Math.random() * 6) + 1}</span>
    </>
  );
}

export default Dice;
