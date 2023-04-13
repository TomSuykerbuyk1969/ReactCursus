import { useState, useContext } from "react";
import Bookedit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({Book}) {
    const [showEdit, setShowedit] = useState(false);

    const { deleteBookById } = useContext(BooksContext);

    const handleDeleteClick = () => {
        deleteBookById(Book.id);
    };

    const handleEditClick = () => {
        setShowedit(!showEdit);
    };

    const handleSubmit = () => {
        setShowedit(false);
    };

    let content =<h3>{Book.title}</h3>;
    if(showEdit)
    {
        content = <Bookedit Book={Book} onSubmit={handleSubmit}/>;
    }

    return (
        <div className="book-show">
            <img
                alt="books"
                src={`https://picsum.photos/seed/${Book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>

        </div>
    );
}

export default BookShow;