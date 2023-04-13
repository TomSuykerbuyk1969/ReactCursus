import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useContext(BooksContext);
    const rederedBooks = books.map((book) => {
        return <BookShow Book={book}/>
    });

    return <div className="book-list">
        {rederedBooks}
    </div>
}

export default BookList;