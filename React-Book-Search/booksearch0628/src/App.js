import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import BookDetailPage from "./pages/bookDetailPage";
import SearchPage from "./pages/SearchPage";
// import FavoritePage from "./components/booksearch/favorite";
import "./App.css";
import Favorite from "./components/booksearch/Favorite";

// import { Provider } from 'react-redux'

//redux,
//store - stores data, think of state
//reducer - function that used to update store
//two arguments - state, action
//state - old state /state before update
//action - what happened /what update
//return updated or old state
// import { createStore }  from 'redux';
// //initial store
// const initialStore  = {
//   count: 0
// };
// //reducer
// function reducer(state, action){
//   console.log({state, action});
//   return state;
// }
// const store = createStore(reducer, initialStore);
// console.log(store.getState());

const NoMatchRoute = () => <div>404 Page not found</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/book/:bookId" exact component={BookDetailPage} />
        <Route path="/favorite" exact component={Favorite} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

export default App;
