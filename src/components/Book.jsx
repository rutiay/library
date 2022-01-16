import { useState } from "react";
import "./style.css";

const Book = ({
  book,
  addBookToReadingList,
  removeBookFromReadingList,
  addBookToCompletedList,
}) => {
  const [isAddedToReadingList, setIsAddedToReadingList] = useState(false);
  return (
    <div className="container">
      <li className="list-group-item" style={{ height: "60vh" }}>
        <h1>{book.title}</h1>
        <span>{book.authors}</span>
        <br />
        <img
          className="img-thumbnail"
          style={{ position: "absolute", marginLeft: "-45%" }}
          src={book.img}
          alt={`${book.title} book cover`}
        />
        <br />
        <p
          style={{
            width: "60%",
            height: "20vh",
            marginLeft: "25%",
            overflow: "hidden",
          }}
        >
          {book.longDescription}
        </p>
        {!isAddedToReadingList ? (
          <svg
            onClick={() => {
              addBookToReadingList(book._id);
              setIsAddedToReadingList(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        ) : (
          <>
            <svg
              onClick={() => addBookToCompletedList(book._id)}
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <svg
              onClick={() => removeBookFromReadingList(book._id)}
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </>
        )}
      </li>
    </div>
  );
};

export default Book;
