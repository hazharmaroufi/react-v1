import CourseCard from "./CourseCard";

function CourseList() {
  const courses = [
    { id: 1, name: "react", desc: "this is react course" },
    { id: 2, name: "next", desc: "this is next course" },
    { id: 3, name: "node", desc: "this is node course" },
  ];
  return (
    <>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} data={course} />
        ))}
      </ul>
    </>
  );
}

export default CourseList;
