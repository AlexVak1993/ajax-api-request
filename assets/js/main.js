let movieList = null;

const createStyle = () => {
  let headStyle = document.createElement('style');

  headStyle.innerHTML = `
  *        {box-sizing: border-box;}
  body     {margin: 0;}
  .wrapper {padding: 20px;}
  .movies {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  }
  .movie {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .movie__image {
    width: 100%;
    object-fit: cover;
  }`;

  document.querySelector('head').appendChild(headStyle);
};

const createMarkup = () => {
  let movieWrapper = document.createElement('div');
  movieWrapper.classList.add('wrapper');
  let movies = document.createElement('div');
  movies.classList.add('movies');
  movieWrapper.appendChild(movies);
  document.querySelector('body').prepend(movieWrapper);
  movieList = document.querySelector('.movies')
};

const addMovieToList = (movie) => {
  let item = document.createElement('div')
  let img = document.createElement('img');

  img.src = movie.Poster;
  img.classList.add('movie__image');

  item.classList.add('movie');
  item.appendChild(img);
  movieList.appendChild(item);
};



createMarkup();
createStyle();