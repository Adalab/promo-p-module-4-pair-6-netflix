const express = require('express');
const cors = require('cors');
const movies = require('./data/movies.json');
const db = new Database('./src/db/database.db', { movies });

// create and config server
const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');

// init express aplication
const serverPort = 4001;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

app.get('/movies', (req, res) => {
  res.json({
    success: true,
    movies: movies,
  });
  console.log('pide movie');
});

app.get('/movie/:movieId', (req, res) => {
  // get film data
  console.log('hola');
  const movieData = movies.find((movie) => movie.id === req.params.movieId);
  console.log(movieData);

  // // response with rendered template
  // if (movieData) {
  //   res.render('movies/movie', movieData);
  // } else {
  //   res.render('movies/movie-not-found');
  // }
});

//servidor estático
const staticServerPath = './src/public-react';
app.use(express.static(staticServerPath));

const staticServerPathImgs = './src/public-images';
app.use(express.static(staticServerPathImgs));
