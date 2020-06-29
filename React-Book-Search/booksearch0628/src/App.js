import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import BookDetailPage from "./pages/bookDetailPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";

const NoMatchRoute = () => <div>404 Page not found</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/book/:bookId" exact component={BookDetailPage} />
        <Route component={NoMatchRoute} />
      </Switch>
    </Router>
  );
};

export default App;
