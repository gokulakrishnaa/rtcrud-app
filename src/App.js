import "./App.css";
import { Home } from "./Home";
import { Books } from "./Books";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
