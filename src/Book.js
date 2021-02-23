
import React from 'react'

const Book = (props) => {
    //what we need to add event: attribute, event handler
    const { img, title, author } = props;
    const clickHandler = () => {
        alert('Hello world');
    };
    const complexExample = () => {
        console.log(author)
    }
    const functionWithArg = (title) => {
        console.log(title)
    }
    return (
        <article className="book" onMouseOver={() => {
            console.log(props)
        }}>
            <img src={img} />
            <h4 onClick={() => console.log(title, "is the title of the book you clicked on!")}>{title}</h4>
            <h5>{author}</h5>
            <button type="button" onClick={clickHandler}>Click me!</button>
            <button type="button" onClick={complexExample}>Another example</button>
            <button type="button" onClick={() => functionWithArg(title)}>function with argument</button>


        </article >
    )
}

export default Book
//to get this whole text, I typed rfce
//can only have 1 export default per file