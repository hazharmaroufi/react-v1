import Dice from "./Dice.jsx";
import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import InfoCard from "./InfoCard.jsx";
import Counter from "./Counter.jsx";
import Form from "./form.jsx";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <InfoCard title="learning" desc="React now" />
      <CourseList />
      <Dice />
      <Form />
    </>
  );
}

export default App;
