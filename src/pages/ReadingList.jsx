import { Link } from "react-router-dom";
import ReadingListBook from "../components/ReadingListBook";

const ReadingList = ({
  readingList,
  setReadingList,
  completedList,
  setCompletedList,
}) => {
  function getCurrentBook(bookId) {
    const currentBook = readingList.find((book) => book._id === bookId);
    return currentBook;
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
      {!readingList.length ? (
        <div>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="/CompletedList">completed books</Link> or{" "}
          <Link to="/Search">discover more</Link>.
        </div>
      ) : (
        <ul className="list-group list-group-flush">
          {readingList.map((book) => (
            <ReadingListBook
              key={book._id}
              book={book}
              addBook={addBookToCompletedList}
              removeBook={removeBookFromReadingList}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadingList;
