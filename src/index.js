// Importamos librerias
const express = require("express");
const cors = require("cors");
//const movies = require('./data/movies.json');
const Database = require("better-sqlite3");

// create and config server, configuración de ExpressJS para APIS:
const app = express();
app.use(cors());
app.use(express.json());

// Congiguración de ExpressJS para dinámicos
app.set("view engine", "ejs");

// Configuración de la base de datos SQLite:
const db = new Database("./src/db/database.db", { verbose: console.log });

/* const orderMovies = (movies, sort) => {
  const orderMovie = movies.sort((a, b) => {
    const movieA = a.title;
    const movieB = b.title;
    if (sort === 'asc') {
      if (movieA < movieB) {
        return -1;
      }
      if (movieA > movieB) {
        return 1;
      }
    } else if (sort === 'desc') {
      if (movieA < movieB) {
        return 1;
      }
      if (movieA > movieB) {
        return -1;
      }
    }
    return 0;
  });
  return orderMovie;
};*/

// Arrancar el servidor:
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoint movies & gender filter
app.get("/movies", (req, res) => {
  let movies = [];
  const genderParam = req.query.gender;
  if (genderParam === "") {
    const query = db.prepare(`SELECT * FROM movies ORDER BY  title`);
    movies = query.all();
  } else {
    const query = db.prepare(
      `SELECT * FROM movies WHERE gender= ? ORDER BY  title`
    );
    movies = query.all(genderParam);
  }
  /*const sort = req.query.sort;
  const sortMovies = orderMovies (movies, sort);*/

  res.json({
    success: true,
    movies: movies,
  });
});

//servidor dinámico

app.get("/movie/:movieId", (req, res) => {
  const query = db.prepare(`SELECT * FROM movies WHERE id = ?`);
  const movie = query.get(req.params.movieId);
  console.log(movie);

  res.render("movies", movie);
});

//servidor estático
const staticServerPath = "./src/public-react";
app.use(express.static(staticServerPath));

const staticServerPathImgs = "./src/public-images";
app.use(express.static(staticServerPathImgs));

// Crear servicio estático para los estilos

const staticServerPathStyles = "./src/public-react/static/css";
app.use(express.static(staticServerPathStyles));
