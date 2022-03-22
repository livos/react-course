import ReactDOM from 'react-dom'

// CSS
import './index.css'
const books = [
  {
    id:1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91AfEwKjDgL._AC_UL604_SR604,400_.jpg",
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz"
  }, 
  {
    id:2,
    img: "https://m.media-amazon.com/images/I/41e+bOAeE-L._SY346_.jpg",
    title: "The Maid: A Novel",
    author: "Nita Prose"
  }, 
  {
    id:3,
    img: "https://m.media-amazon.com/images/I/41EiBLxybSL.jpg",
    title: "Reminders of Him: A Novel",
    author: "Colleen Hoover"
  }  
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author } = book      
        return <Book key={book.id} book={book}></Book>
    })}</section>
  )
}

// explicit return
const Book = (props) => {
  const {img, title, author} = props.book
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))