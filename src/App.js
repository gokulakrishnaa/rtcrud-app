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
  const booksdata = [
    {
      id: 100,
      name: "Steve Jobs",
      author: "Walter Isaacson",
      cover: "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
      description:
        "Walter Isaacson's enthralling (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues--Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries.",
      rating: 4,
    },
    {
      id: 101,
      name: "Ponniyin Selvan",
      author: "Kalki",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71q5EXjs4sL.jpg",
      description:
        "Ponniyin Selvan, authored by Kalki Krishnamurthy, is a brilliant set of five volumes in Tamil. It is a historical novel, which recounts the story of Raja Raja Chola I. Ponniyin Selvan means 'The son of Ponni'. It chronicles the story Arulmozhivarman, who was crowned as Raja Raja Chola I in the later years.",
      rating: 4.7,
    },
    {
      id: 102,
      name: "Shoe Dog",
      author: "Phil Knight",
      cover:
        "https://images-na.ssl-images-amazon.com/images/I/41K0Lnqfe4L._SX323_BO1,204,203,200_.jpg",
      description:
        "In 1962, fresh out of business school, phil knight borrowed $50 from his father and created a company with a simple mission: import high-quality, low-cost athletic shoes from japan. Selling the shoes from the boot of his Plymouth, knight grossed $8000 in his first year. Today, nike's annual sales top $30 billion. In an age of start-ups, nike is the ne plus ultra of all start-ups, and the swoosh has become a revolutionary, globe-spanning icon, one of the most ubiquitous and recognisable symbols in the world today.",
      rating: 4.2,
    },
    {
      id: 103,
      name: "Elon Musk",
      author: "Ashlee Vance",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1518291452l/25541028.jpg",
      description:
        "Elon Musk, the entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, sold one of his internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius's life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.",
      rating: 4.3,
    },
    {
      id: 104,
      name: "The Ride of Lifetime",
      author: "Robert Iger",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556036622l/44525305.jpg",
      description:
        "A grand vision defined: The CEO of The Walt Disney Company shares the ideas and values he has used to reinvent one of the most beloved companies in the world, and inspire the people who bring the magic to life.",
      rating: 4.4,
    },
    {
      id: 105,
      name: "Notes of a Dream",
      author: "Krishna",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533093988l/41018413._SX318_.jpg",
      description:
        "Who really is A.R. Rahman? We know the music. But do we know the man? For the first time, a nation's pride--winner of National Film awards, Oscars, Grammys and hearts--opens up about his philosophies: hope, perseverance, positivity and love.",
      rating: 4,
    },
  ];
  const [books, setBooks] = useState(booksdata);
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
            <Addbook books={books} setBooks={setBooks} />
          </Route>
          <Route path="/books/edit/:id">
            <Editbook books={books} setBooks={setBooks} />
          </Route>
          <Route path="/books/:id">
            <Bookdetails books={books} />
          </Route>
          <Route path="/books">
            <Books books={books} setBooks={setBooks} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
