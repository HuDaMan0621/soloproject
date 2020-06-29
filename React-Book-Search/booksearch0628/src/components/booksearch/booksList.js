import React from "react";
import { Link } from "react-router-dom";

import { bookAuthors } from "../utils";

const Book = ({ book }) => {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    // padding: "5px",
    text: "center",
    marginBottom: "2px",
    fontFamily: "Arial",
    // flexshrink: "0",
    position: "absolute",
    bottom: "0",
    // width: "100%",
    // height: "2.5rem",
    borderRadius: "5px",
  };

  // style={{ color: `red`, borderRadius: `5px`, padding: `10px`, }}
  return (
    <div
      className="card col-md-3 mb-5 text-white bg-primary mb-3"
      style={{ margin: "5px" }}
    >
      <img
        className="card-img-top"
        style={{ marginTop: "5px", height: "250px" }}
        alt={`${book.volumeInfo.title} book`}
        //using the image url from google books based on book id to get the images
        src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
      />
      <div className="card-body">
        <h4 className="card-title">Title: {book.volumeInfo.title}</h4>
        <p className="card-text">
          Author: {bookAuthors(book.volumeInfo.authors)}
        </p>
        <p>Volume Information: {book.volumeInfo.title}</p>
        <Link to={`/book/${book.id}`} className="bg-dark" style={mystyle}>
          Show Details
        </Link>
      </div>
    </div>
  );
};

const BooksList = ({ books }) => {
  const singlebookstyle = {
    margin: "10px",
  };

  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </div>
  );
};

export default BooksList;

//todo
