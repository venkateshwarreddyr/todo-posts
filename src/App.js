import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomePage from "./container/HomePage";
import PostPage from './container/PostPage';
import Header from './Header';
import UserPage from "./container/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:postId" component={PostPage} />
        <Route path="/user/:userId" component={UserPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
