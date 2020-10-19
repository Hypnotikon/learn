import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import {books} from "./books.js"
import Book from "./book.js"
/* function Greeting(){

    return <p>This is my first component, hello</p>
} */



/* const Greeting = () =>{
    return React.createElement("h1", {}, "Hello world", React.createElement(
    "h2", {}, "hellooo"))
} */

/* const Person = () => <h2>John Doe</h2>
const Message = () => <h2>Praha is amazing</h2> */


function Booklist (){
return <section className="bookList">{books.map((book) => {
    /* const {img, title, author} = book; */
    return <Book key={book.id} {...book}></Book>
})}
</section>
}

ReactDom.render(<Booklist/>, document.getElementById("root"))









