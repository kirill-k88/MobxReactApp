import { FC } from 'react';
import { IMovie } from '../../types/movie';

import './Film.css';
import { movieStore } from '../../store/movie';

interface IFilmProps {
  movie: IMovie;
}

export const Film: FC<IFilmProps> = ({ movie }) => {
  const deleteHandle = () => {
    movieStore.deleteOne(movie.id);
  };

  return (
    <li className="film">
      <div className="film__data">
        <p className="film__ganre">
          {movie.genres && movie.genres.reduce((res, g) => (res += ` ${g.name}`), '')}
        </p>
        <p className="film__name">{movie.name}</p>
        <p className="film__ganre">{movie.year}</p>
      </div>
      <p className="film__desc">{movie.description}</p>
      {movie.poster && (movie.poster.previewUrl || movie.poster.url) && (
        <img
          className="film__poster"
          src={movie.poster.previewUrl || movie.poster.url || undefined}
        />
      )}
      <div className="film__rate">
        <p className="film__name">КП</p>
        <p className="film__mark">{movie.rating.kp}</p>
      </div>
      <button
        type="button"
        className="film__deleteBtn"
        onClick={deleteHandle}>
        X
      </button>
    </li>
  );
};
