import React from "react";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/NewBlog/Create";
import BlogDetail from "./Components/NewBlog/BlogDetail";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
