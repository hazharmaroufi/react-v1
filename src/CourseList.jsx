function CourseList() {
  const courses = [
    { id: 1, name: "react" },
    { id: 2, name: "next" },
    { id: 3, name: "node" },
  ];
  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </>
  );
}

export default CourseList;
