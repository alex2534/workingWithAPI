import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
<<<<<<< HEAD
          releaseDate={movie.release}
=======
          releaseDate={movie.releaseDate}
>>>>>>> 8c836c4a1a5b2862699af16a47a97b934361eec8
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
