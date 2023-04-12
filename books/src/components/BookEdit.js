import { useState } from "react";

function Bookedit({ Book, onSubmit }) {
    const [title, setTitle] = useState(Book.title);
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(Book.id, title);
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