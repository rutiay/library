import { Link } from "react-router-dom";
import Rating from "./Rating/Rating";
import "./style.css";

const CompletedBook = ({ book, removeBook }) => {
  return (
    <div className="CompletedBook container">
      <li className="list-group-item" style={{ height: "60vh" }}>
        <Rating />
        <Link
          to={`/Details/${book._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
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
        </Link>
        <svg
          onClick={() => removeBook(book._id)}
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="currentColor"
          className="bi bi-x-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </li>
    </div>
  );
};

export default CompletedBook;
