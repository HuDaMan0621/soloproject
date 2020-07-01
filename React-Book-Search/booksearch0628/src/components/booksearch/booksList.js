import React from "react";
import { Link } from "react-router-dom";
import { bookAuthors } from "../utils";
import { connect } from "react-redux";
import { addBook } from "../../redux/actions/favActions";
import { favorite } from "./Favorite";

const Book = ({ book, addBook }) => {
  const mystyle = {
    color: "red",
    backgroundColor: "DodgerBlue",
    text: "center",
    marginBottom: "2px",
    fontFamily: "Arial",
    position: "absolute",
    bottom: "0",
    borderRadius: "5px",
  };

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
        <button
          className=""
          style={{ display: "flex", flexDirection: "column-reverse" }}
          onClick={() => addBook(book)}
        >
          {" "}
          Add Favorite
        </button>
      </div>
    </div>
  );
};

{
  /* <button className="" style={{display: "flex", flexDirection: "column-reverse"}} onClick={() => this.props.addBook(book)//we want to pass the book} //this is how we hide the function from the event, any time we don't want to pass the event  > Add Favorite</button> */
}

const BooksList = ({ books, addBook }) => {
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      {books.items.map((book, index) => {
        return <Book book={book} addBook={addBook} key={index} />;
      })}
    </div>
  );
};

//the order is important
const mapDispatchToProps = {
  addBook: addBook,
};

export default connect(null, mapDispatchToProps)(BooksList);
// export default connect(null, (the current state of the store) mapDispatchToProps(how we set the store) //we take this function and connect it to -> BooksList)(BooksList);
