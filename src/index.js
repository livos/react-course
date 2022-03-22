import ReactDOM from 'react-dom'

// CSS
import './index.css'
// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91AfEwKjDgL._AC_UL604_SR604,400_.jpg",
  title: "The Four Agreements: A Practical Guide to Personal Freedom",
  author: "Don Miguel Ruiz"
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/41e+bOAeE-L._SY346_.jpg",
  title: "The Maid: A Novel",
  author: "Nita Prose"
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci illum ut quod ea quo nostrum, iusto ullam deserunt molestiae minus.</p>
        </Book>
      <Book 
        img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author}/>
    </section>
  )
}

// explicit return
const Book = (props) => {  
  const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      { props.children }
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))