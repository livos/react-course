import ReactDOM from 'react-dom'

// Nested components, React tools

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

// explicit return
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

// implicit return
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91AfEwKjDgL._AC_UL604_SR604,400_.jpg" alt=""/>
const Author = () => <h4>Don Miguel Ruiz</h4>
const Title = () => <h1>The Four Agreements: A Practical Guide to Personal Freedom</h1>



ReactDOM.render(<BookList />, document.getElementById('root'))