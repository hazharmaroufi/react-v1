import { useState } from "react";
import "./CourseCard.css";
import styles from "./CourseCard.module.css";

function CourseCard({ data: { name, desc } }) {
  const [selected, setSelected] = useState(false);
  const selectHandler = () => {
    setSelected((selected) => !selected);
  };
  return (
    <li className={`cardList ${selected ? "select" : ""}`}>
      <h4 style={{ color: selected ? "yellow" : "green", fontSize: "20px" }}>
        {name}
      </h4>
      <p className={styles.parag}>{desc}</p>
      <button onClick={selectHandler}>Select</button>
    </li>
  );
}

export default CourseCard;
