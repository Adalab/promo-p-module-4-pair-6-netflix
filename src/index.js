const express = require('express');
const cors = require('cors');
const movies = require('./data/movies.json');
const Database = require('better-sqlite3');

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

const db = new Database('./src/db/database.db', { verbose: console.log });

//endpoint movies

app.get('/movies', (req, res) => {
  const query = db.prepare(`SELECT * FROM movies  ORDER BY  title `);
  const movieList = query.all();
  res.json({
    success: true,
    movies: movieList,
  });
});

//servidor dinámico

app.get('/movie/:movieId', (req, res) => {
  const query = db.prepare(`SELECT * FROM movies WHERE id = ?`);
  const movie = query.get(req.params.movieId);
  console.log(movie);

  res.render('movies', movie);
});

//servidor estático
const staticServerPath = './src/public-react';
app.use(express.static(staticServerPath));

const staticServerPathImgs = './src/public-images';
app.use(express.static(staticServerPathImgs));

// Crear servicio estático para los estilos

const staticServerPathStyles = '.src/web/src/stylesheets';
app.use(express.static(staticServerPathStyles));
