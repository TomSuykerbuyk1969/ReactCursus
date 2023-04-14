import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

function BookList() {
    const { books } = useBooksContext();
    const rederedBooks = books.map((book) => {
        return <BookShow key={book.id} Book={book}/>
    });

    return <div className="book-list">
        {rederedBooks}
    </div>
}

export default BookList;