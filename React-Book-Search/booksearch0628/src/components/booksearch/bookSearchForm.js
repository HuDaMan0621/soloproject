import React from "react";
import { Link } from "react-router-dom";
// import { favorite } from "../booksearch/favorite";

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  const style = {
    position: "center",
    minHeight: "100%",
    text: "center",
    margin: "50px",
    // outline: "none",
  };

  return (
    <div style={style}>
      {/* Navbar */}
      <h1 className="">
        The Great Book Store <br></br>
        The Path To Success: Start your search Below
      </h1>
      <form onSubmit={onSubmitHandler} className="form-inline">
        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </form>

      {/* Jumbotron Search Div */}
      <div className="container">
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
          <div className="container">
            <h4 className="mb-3">
              <Link
                to={`/favorite`}
                className="bg-dark"
                style={{ borderRadius: "5px", margin: "0 5px" }}
              >
                My Favorite Books
              </Link>
              <i className="fa fa-search" /> Search for Books
              <form className="" onSubmit={onSubmitHandler}>
                <input
                  className="mainInput display-4 mb-3"
                  style={{
                    fontSize: "1rem",
                    width: "80%",
                    outline: "none",
                    borderRadius: "5px",
                    marginTop: "20px",
                  }}
                  type="text"
                  placeholder="How to Hack NASA with HTML, etc...,"
                  value={searchTerm}
                  onChange={onInputChange}
                  required
                  defaultValue=""
                />
                <button
                  className="btn btn-primary "
                  style={{ margin: "5px" }}
                  type="submit"
                >
                  Search
                </button>
                {error && (
                  <div style={{ color: `red` }}>
                    An Error Occurred During the Search, Check API Key...
                  </div>
                )}
              </form>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchForm;
