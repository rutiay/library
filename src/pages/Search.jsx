import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../components/Book";
import Spinner from "../components/Spinner";

const Search = ({
  books,
  readingList,
  setReadingList,
  isLoading,
  completedList,
  setCompletedList,
}) => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState(books);

  function searchBook(qurey) {
    const temp_result = books.filter(
      (book) =>
        book.title.toLowerCase().includes(qurey) ||
        book.longDescription.toLowerCase().includes(qurey) ||
        book.authors.toLowerCase().includes(qurey)
    );
    setResult(temp_result);
  }

  function getCurrentBook(bookId) {
    const currentBook = books.find((book) => book._id === bookId);
    return currentBook;
  }

  function addBookToReadingList(bookId) {
    const bookToAdd = getCurrentBook(bookId);
    const readingListCopy = [...readingList];
    readingListCopy.push(bookToAdd);
    setReadingList(readingListCopy);
  }

  function addBookToCompletedList(bookId) {
    const bookToAdd = getCurrentBook(bookId);
    const completedListCopy = [...completedList];
    completedListCopy.push(bookToAdd);
    removeBookFromReadingList(bookId);
    setCompletedList(completedListCopy);
  }

  function removeBookFromReadingList(bookId) {
    const readingListCopy = [...readingList].filter(
      (book) => book._id !== bookId
    );
    setReadingList(readingListCopy);
  }

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <form
          style={{margin: "10px 60px", width:"90%"}}
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              searchBook(book.toLowerCase());
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Book"
              aria-label="Search"
              onChange={(e) => setBook(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* <input
            type="text"
            placeholder="Search Book"
            onChange={(e) => setBook(e.target.value)}
          /> */}
          {/* <button onClick={() => searchBook(book.toLowerCase())}>Search</button> */}
          <ul className="list-group list-group-flush">
            {result.slice(0, 10).map((book) => (
              <Book
                key={book._id}
                book={book}
                addBookToReadingList={addBookToReadingList}
                removeBookFromReadingList={removeBookFromReadingList}
                addBookToCompletedList={addBookToCompletedList}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Search;
