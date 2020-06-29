import React from "react";

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
              <i className="fa fa-search" /> Search for Books
              <form className="" onSubmit={onSubmitHandler}>
                <input
                  className="display-4 mb-3"
                  style={{ fontSize: "1rem", width: "80%" }}
                  type="search"
                  placeholder="How to Hack NASA with HTML, etc...,"
                  value={searchTerm}
                  onChange={onInputChange}
                  required
                />
                <button
                  className="btn btn-primary"
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
