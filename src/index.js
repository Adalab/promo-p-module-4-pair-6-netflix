const express = require('express');
const cors = require('cors');
const movies = require ('./data/movies.json');

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
const staticServerPath = './src/public-react'; 
app.use(express.static(staticServerPath));

app.get('/movies', (req, res) => {
  console.log('Ha pasao por aqui.');
  res.json(movies);
});
