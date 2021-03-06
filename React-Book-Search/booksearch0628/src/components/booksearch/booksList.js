import React from "react";
import { Link } from "react-router-dom";
import { bookAuthors } from "../utils";
import { connect } from "react-redux";
import { addBook } from "../../redux/actions/favActions";
import { favorite } from "./Favorite";

const Book = ({ book, addBook }) => {
  const mystyle = {
    color: "red",
    // backgroundColor: "DodgerBlue",
    text: "center",
    marginBottom: "0px",
    fontFamily: "Arial",
    bottom: "0",
    borderRadius: "5px",
  };

  const mystyle2 = {
    margin: "5px",
    borderRadius: "3px",
    border: "3px solid black",
    boxShadow: "5px 10px 18px #888888",
  };
  const mystyle3 = {
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
    <>
      <div
        className="col-md-3 mb-5 text-white bg-primary mb-3"
        style={mystyle2}
      >
        <img
          className="card-img-top"
          style={{
            marginTop: "5px",
            height: "250px",
            border: "3px solid grey",
          }}
          alt={`${book.volumeInfo.title} book`}
          //using the image url from google books based on book id to get the images
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div className="card-body">
          <h5 className="card-title">Title: {book.volumeInfo.title}</h5>
          <p className="card-text">
            Author: {bookAuthors(book.volumeInfo.authors)}
          </p>
          {/* <p>Volume Information: {book.volumeInfo.title}</p> style={mystyle3 style={mystyle}*/}
          <div className="row" style={mystyle3}>
            <div className="bg-primary col-md" style={{display:"flex", justifyContent:"colomun-end"}}>
              <Link to={`/book/${book.id}`} className="bg-dark" style={mystyle}>
                ShowDetails
              </Link>
            </div>
            {/* <div className="row"style={{width: "100%"}}> */}
              <div className="bg-primary col-md">
                <button
                  style={{ borderRadius: "5px" }}
                  className=""
                  onClick={() => addBook(book)}
                >
                  {" "}
                AddFavorite
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
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
