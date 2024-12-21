import Content from "./Content/Content";
import Header from "./Header/Header";
import Total from "./Total/Total";

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </div>
  )
}

export default App
