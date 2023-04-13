import { useState, useContext } from "react";
import BooksContext from "../context/books";

function Bookedit({ Book, onSubmit }) {
    const [title, setTitle] = useState(Book.title);

    const { editBookById } = useContext(BooksContext);
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(Book.id, title);
    };

    return (
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
            Save
        </button>
      </form>  
    );
}

export default Bookedit;