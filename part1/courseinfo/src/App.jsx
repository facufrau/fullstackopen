const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  const elements =  props.course.parts
  return (
    <div>
      <Part name={elements[0].name} exercises={elements[0].exercises} />
      <Part name={elements[1].name} exercises={elements[1].exercises} />
      <Part name={elements[2].name} exercises={elements[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  let total = 0
  props.course.parts.forEach(value => total += value.exercises)
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
