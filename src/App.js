import "./App.css";
import { Link, Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { FIREBASE_AUTH_LOCAL_STORAGE } from "./logic/keys";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReadingList from "./pages/ReadingList";
import CompletedList from "./pages/CompletedList";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const localStorageAuth = JSON.parse(
      localStorage.getItem(FIREBASE_AUTH_LOCAL_STORAGE)
    );
    if (localStorageAuth) setAuth(localStorageAuth);
    getBooks();
  }, [auth]);

  function getBooks() {
    const url = `data/books.json`;
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          setBooks(res.data.books);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }, 1000);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {auth ? (
          <>
          <Navbar user={auth.email} setAuth={setAuth}/>
            <Redirect to="/ReadingList" />
          </>
        ) : (
          <>
            <Redirect to="/" />
          </>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Login"
            render={() => (
              <Login
                setAuth={setAuth}
                localStorageKey={FIREBASE_AUTH_LOCAL_STORAGE}
              />
            )}
          />
          <Route
            exact
            path="/Register"
            render={() => (
              <Register
                setAuth={setAuth}
                localStorageKey={FIREBASE_AUTH_LOCAL_STORAGE}
              />
            )}
          />
          <Route
            exact
            path="/ReadingList"
            render={() => (
              <ReadingList
                readingList={readingList}
                setReadingList={setReadingList}
                completedList={completedList}
                setCompletedList={setCompletedList}
              />
            )}
          />
          <Route
            exact
            path="/CompletedList"
            render={() => (
              <CompletedList
                completedList={completedList}
                setCompletedList={setCompletedList}
              />
            )}
          />
          <Route
            exact
            path="/Search"
            render={() => (
              <Search
                books={books}
                setBooks={setBooks}
                readingList={readingList}
                setReadingList={setReadingList}
                completedList={completedList}
                setCompletedList={setCompletedList}
                isLoading={isLoading}
              />
            )}
          />
          <Route
            exact
            path={`/Details/:bookId`}
            render={() => <Details books={books} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
