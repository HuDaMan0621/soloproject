import React, { useState } from "react";
import axios from "axios";

import BookSearchForm from "../components/booksearch/bookSearchForm";
import Loader from "../components/booksearch/Loader";
import BooksList from "../components/booksearch/booksList";
// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

// class App extends Component {

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;
  const fetchBooks = async () => {
    // set loading Before API fetches
    setLoading(true);
    setError(false); //error handling state
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    // Set loading state to false when fetch ends
    setLoading(false);
    //Ajax call to API using AXIOS
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    //Books result
    console.log(result.data);
    setBooks(result.data);
    //submit Handler
  };

  const onSubmitHandler = (e) => {
    // prevent browser refreshing after submitting
    e.preventDefault();
    //Call fetch books async func
    fetchBooks();
  };

  // const [searchTerm, setSearchTerm] = useState('');
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <BookSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      <Loader searchTerm={searchTerm} loading={loading} />
      <BooksList books={books} />
    </>
  );
};

export default SearchPage;
