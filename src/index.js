// Importamos librerias
const express = require('express');
const cors = require('cors');
//const movies = require('./data/movies.json');
const Database = require('better-sqlite3');

// create and config server, configuración de ExpressJS para APIS:
const app = express();
app.use(cors());
app.use(express.json());

// Congiguración de ExpressJS para dinámicos
app.set('view engine', 'ejs');

// Configuración de la base de datos SQLite:
const db = new Database('./src/db/database.db', { verbose: console.log });

// Arrancar el servidor:
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoint movies & gender filter
app.get('/movies', (req, res) => {
  let movies = [];

  const genderParam = req.query.gender ? req.query.gender : '';
  const sortParam = req.query.sort ? req.query.sort : '';

  if (genderParam === '') {
    const query = db.prepare(
      `SELECT * FROM movies ORDER BY title ${sortParam}`
    );
    movies = query.all();
  } else {
    const query = db.prepare(
      `SELECT * FROM movies WHERE gender= ? ORDER BY title ${sortParam}`
    );
    movies = query.all(genderParam);
  }

  res.json({
    success: true,
    movies: movies,
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
const pathServerPublicStyles = './src/public-css';
app.use(express.static(pathServerPublicStyles));

app.get('*', (req, res) => {
  res.send('NUUUUUUP, try again');
});
