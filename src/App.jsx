import Dice from "./Dice.jsx";
import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import InfoCard from "./InfoCard.jsx";

function App() {
  return (
    <>
      <Header />
      <InfoCard title="learning" desc="React now" />
      <CourseList />
      <Dice />
    </>
  );
}

export default App;
