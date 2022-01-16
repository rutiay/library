import React from "react";
import { Link } from "react-router-dom";
import CompletedBook from "../components/CompletedBook";

const CompletedList = ({ completedList, setCompletedList }) => {
  function removeBookFromCompletedList(bookId) {
    const completedListCopy = [...completedList].filter(
      (book) => book._id !== bookId
    );
    setCompletedList(completedListCopy);
  }

  return (
    <div>
      {!completedList.length ? (
        <div>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the{" "}
          <Link to="/Search">Search Page</Link> to add books to your list.
        </div>
      ) : (
        <ul className="list-group list-group-flush">
          {completedList.map((book) => (
            <CompletedBook
              key={book._id}
              book={book}
              removeBook={removeBookFromCompletedList}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedList;
