const express = require("express");
const cors = require("cors");
const movies = require("./data/movies.json");

// create and config server
const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get("/movie/:movieId", (req, res) => {
  // get film data
  const movieData = movies.movies.find((movie) => movie.id === req.params.movieId);
  console.log("movie data", movieData);

  // response with rendered template
  if (movieData) {
    res.render("movies/movie", movieData);
  } else {
    res.render("movies/movie-not-found");
  }
});

//servidor estático
const staticServerPath = "./src/public-react";
app.use(express.static(staticServerPath));

app.get("/movies", (req, res) => {
  console.log("Ha pasao por aqui.");
  res.json(movies);
});
