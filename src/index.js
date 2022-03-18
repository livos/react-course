import ReactDOM from 'react-dom'

// CSS
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

// explicit return
const author = "Don Miguel Ruiz"
const Book = () => {
  const title = "The Four Agreements: A Practical Guide to Personal Freedom"
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/91AfEwKjDgL._AC_UL604_SR604,400_.jpg" alt=""/>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{something with comment}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))