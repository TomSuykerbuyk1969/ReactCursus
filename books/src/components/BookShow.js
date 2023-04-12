import { useState } from "react";
import Bookedit from "./BookEdit";

function BookShow({Book, onDelete, onEdit}) {
    const [showEdit, setShowedit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(Book.id);
    };

    const handleEditClick = () => {
        setShowedit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowedit(false);
        onEdit(id, newTitle);
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