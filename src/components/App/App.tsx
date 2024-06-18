import { observer } from 'mobx-react-lite';
import { Film } from '../Film/Film';
import './App.css';
import { ChangeEvent, FC, useEffect } from 'react';
import { movieStore } from '../../store/movie';

export const App: FC = observer(() => {
  useEffect(() => {
    movieStore.fetchMovies();
  }, []);

  const clearAllHandle = () => {
    movieStore.deleteAll();
  };

  const refreshHandle = () => {
    movieStore.refresh();
  };

  const findeMovies = (e: ChangeEvent<HTMLInputElement>) => {
    movieStore.findMovies(e.target.value);
  };

  return (
    <div className="mainContainer">
      <input
        type="text"
        className="searchField"
        onChange={findeMovies}
      />
      <button
        type="button"
        onClick={clearAllHandle}>
        Очистить
      </button>
      <button
        type="button"
        onClick={refreshHandle}>
        Обновить
      </button>
      <ul className="filmList">
        {movieStore.filtredMovies.map(m => (
          <Film
            movie={m}
            key={m.id}
          />
        ))}
      </ul>
    </div>
  );
});
