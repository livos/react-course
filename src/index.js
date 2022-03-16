import ReactDOM from 'react-dom'

const Greeting = () => {
  return (
    <div>
    <Person/>
    <Message/>
    </div>
  )
}

const Person = () => <h2>John Doe</h2>
const Message = () => <h3>Hello world</h3>


ReactDOM.render(<Greeting />, document.getElementById('root'))