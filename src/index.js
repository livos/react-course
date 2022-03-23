import ReactDOM from 'react-dom'

// CSS
import './index.css'

const books = [
  {
    id:1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51oVrNQVLiL._SX345_BO1,204,203,200_.jpg",
    title: "The Four Agreements: A Practical Guide to Personal Freedom",
    author: "Don Miguel Ruiz"
  }, 
  {
    id:2,
    img: "https://m.media-amazon.com/images/I/41e+bOAeE-L.jpg",
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
        return <Book key={book.id} {...book}></Book>
    })}</section>
  )
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))