// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import favorite from "../components/booksearch/favorite";

// const FavoritePage = ({ match }) => {
//     const {
//         params: { bookId },
//     } = match;

//     const [book, setBook] = useState(null);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const API_BASE_URL = `https://www.googleapis.com/books/v1/volumes`;
//         const fetchBook = async () => {
//             setLoading(true);
//             setError(false);
//             try {
//                 const result = await axios.get(`${API_BASE_URL}/${bookId}`);
//                 setBook(result.data);
//             } catch (error) {
//                 setError(true);
//             }
//             setLoading(false);
//         };
//         // Call the APi
//         fetchBook();
//     }, [bookId]);

//     return (
//         <>
//             <Link to={`/`}> Go back to search Books</Link>
//             {loading && (
//                 <div style={{ color: `green` }}>
//                     loading book detail for Book ID: <strong>{bookId}</strong>
//                 </div>
//             )}
//             {error && (
//                 <div style={{ color: `red` }}>An Error Occurred while fecthing API</div>
//             )}
//             {book && <FavoritePage book={book} />}
//         </>
//     );
// };

// export default FavoritePage;
