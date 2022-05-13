const express = require('express');
const cors = require('cors');
const movies = require ('./data/movies.json');

const movies = {
  success: true,
  movies: [
    {
      id: '1',
      title: 'Gambita de dama',
      gender: 'Drama',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Friends',
      gender: 'Comedia',
      image: 'https://via.placeholder.com/150',
    },
  ],
};

// create and config server
const app = express();
app.use(cors());
app.use(express.json());

// init express aplication
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//servidor estático
const staticServerPath = './public'; 
app.use(express.static(staticServerPath));

app.get('/movies', (req, res) => {
  console.log('Ha pasao por aqui.');
  res.send(movies);
});
