import { useState } from "react";
import "./CourseCard.css";

function CourseCard({ data: { name, desc } }) {
  const [selected, setSelected] = useState(false);
  const selectHandler = () => {
    setSelected((selected) => !selected);
  };
  return (
    <li className={`cardList ${selected ? "select" : ""}`}>
      <h4>{name}</h4>
      <p>{desc}</p>
      <button onClick={selectHandler}>Select</button>
    </li>
  );
}

export default CourseCard;
