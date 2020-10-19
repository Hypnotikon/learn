import React from 'react'

const Book = (props) => {
    const funk = (ahoj) => {
        console.log("ahoj")
    }
    
    const complex = (author) => {
        console.log(author)
    }
    
    function Ahoj(prop){return <h1 style={{color:"blue"}}>ahooooj + {prop.nome}</h1>}
    const {img, author, title} = props
    return (
        <section className="book" onMouseOver={()=>{
            console.log(title)
        }}>
            <img src={img}></img>
            <h1>{author}</h1>
            <h1 onClick={()=> console.log(title)}>{title}</h1>
            <Ahoj nome="ahooj"/>
            <button onClick={()=>funk("ahoj")}>Click here</button>
            <button onClick={()=>complex(author)}>sfsdf</button>
        </section>
    )
} 


export default Book
