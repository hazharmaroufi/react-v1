import { useState } from "react";
import styled from "styled-components";
const Span = styled.span`
  font-size: ${(props) => (props.clicked ? "24px" : "16px")};
  color: blue;
`;

function Dice() {
  const [clicked, setClicked] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setClicked((s) => !s);
        }}
      >
        size
      </button>
      <Span clicked={clicked}>You got the number </Span>
      <Span>{Math.floor(Math.random() * 6) + 1}</Span>
    </>
  );
}

export default Dice;
