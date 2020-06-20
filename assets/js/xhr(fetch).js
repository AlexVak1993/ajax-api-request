// Fetch

const getData = (url) => fetch(url)
.then(response => response.json())
.then(json => json.Search);

const search1 = 'Iron man';
const search2 = 'Batman';
const search3 = 'Superman';

let ironman = getData(`http://www.omdbapi.com/?s=${search1}&apikey=9e420472`);
let batman = getData(`http://www.omdbapi.com/?s=${search2}&apikey=9e420472`);
let superman = getData(`http://www.omdbapi.com/?s=${search3}&apikey=9e420472`);

Promise.all([ironman, batman, superman])
.then(result => result
.forEach((movies) =>
  movies.forEach((movie) => 
  addMovieToList(movie))));