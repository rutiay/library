import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Rating from "../components/Rating/Rating";

const Details = ({ books }) => {
  const [book, setBook] = useState("");
  const [note, setNote] = useState("");
  const { bookId } = useParams();

  useEffect(() => getCurrentBook(Number(bookId)), []);

  useEffect(() => {
    if (book !== '') book.userNote = note;
  }, [note]);

  function getCurrentBook(bookId) {
    const currentBook = books.find((book) => book._id === bookId);
    setBook(currentBook);
  }

  return (
    <div>
      {book ? (
        <div>
          <Rating />
          <h1>{book.title}</h1>
          <img src={book.img} alt="book cover" />
          <br />
          <span>{book.authors}</span>
          <br />
          <br />
          <p>{book.longDescription}</p>
          <h3>Notes</h3>
          <textarea
            rows="10"
            cols="90"
            onChange={(e) => {
              setNote(e.target.value);
            }}
            defaultValue={book.userNote}
          ></textarea>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Details;
