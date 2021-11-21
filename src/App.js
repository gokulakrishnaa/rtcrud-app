import "./App.css";
import { Home } from "./Home";
import { Books } from "./Books";
import { Addbook } from "./Addbook";
import { Editbook } from "./Editbook";
import { Bookdetails } from "./Bookdetails";
import { Switch, Route } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const history = useHistory();
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button
              onClick={() => history.push("/")}
              variant="text"
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={() => history.push("/books")}
              variant="text"
              color="inherit"
            >
              Books
            </Button>
            <Button
              onClick={() => history.push("/addbook")}
              variant="text"
              color="inherit"
            >
              Add Book
            </Button>
            <Button
              style={{ marginLeft: "auto" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              variant="text"
              color="inherit"
            >
              {mode === "light" ? "dark" : "light"}
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addbook">
            <Addbook />
          </Route>
          <Route path="/books/edit/:id">
            <Editbook />
          </Route>
          <Route path="/books/:id">
            <Bookdetails />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
