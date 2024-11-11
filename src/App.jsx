import Dice from "./Dice.jsx";
import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import InfoCard from "./InfoCard.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <InfoCard title="learning" desc="React now" />
      <CourseList />
      <Dice />
    </>
  );
}

export default App;
