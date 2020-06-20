const getData = (url) =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        let json = JSON.parse(xhr.response);
        return resolve(json.Search);
      } else reject(xhr.statusText);
    };

    xhr.onerror = (err) => reject(err);
  });

  // const search = 'Iron man';
  // getData(`http://www.omdbapi.com/?s=${search}&apikey=9e420472`).then((movies) =>
  //   movies.forEach((movie) => addMovieToList(movie)));

const search1 = 'Iron man';
const search2 = 'Batman';
const search3 = 'Superman';

let ironman = getData(`http://www.omdbapi.com/?s=${search1}&apikey=9e420472`);
let batman = getData(`http://www.omdbapi.com/?s=${search2}&apikey=9e420472`);
let superman = getData(`http://www.omdbapi.com/?s=${search3}&apikey=9e420472`);

// ironman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
// console.log(`Load: Iron man movies`);
// setTimeout(() => {
//   batman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
//   console.log(`Load: Batman movies`);
// }, 2000);
// setTimeout(() => {
//   superman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
//   console.log(`Load: Superman movies`);
// }, 5000);

Promise.all([ironman, batman, superman])
.then(result => result
.forEach((movies) =>
  movies.forEach((movie) => 
  addMovieToList(movie))));