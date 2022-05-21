const getMoviesFromApi = (value) => {
  console.log('Se están pidiendo las películas de la app');
  return fetch(
    `//localhost:4000/movies?gender=${value.gender}&sort=${value.sort}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
