import styled from "styled-components";
const Span = styled.span`
  font-size: 24px;
  color: blue;
`;

function Dice() {
  return (
    <>
      <Span>You got the number </Span>
      <Span>{Math.floor(Math.random() * 6) + 1}</Span>
    </>
  );
}

export default Dice;
