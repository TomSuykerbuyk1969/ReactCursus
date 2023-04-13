import BookShow from "./BookShow";

function BookList({Books, onDelete, onEdit}) {
    const rederedBooks = Books.map((book) => {
        return <BookShow onEdit={onEdit} key={book.id} Book={book} onDelete={onDelete}/>
    });

    return <div className="book-list">{rederedBooks}</div>
}

export default BookList;