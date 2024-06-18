import { makeAutoObservable } from 'mobx';
import { IMovie } from '../types/movie';
import { remove } from 'lodash';

import { axiosInstance } from '../API/axiosInstance';
import { getParams } from '../functions/apiHandler';

class Movie {
  movies: IMovie[] = [];
  filtredMovies: IMovie[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  deleteAll() {
    this.filtredMovies = [];
  }

  refresh() {
    this.fetchMovies();
  }

  deleteOne(id: number) {
    remove(this.filtredMovies, i => i.id === id);
  }

  setMovies(movies: IMovie[]) {
    this.movies = movies;
  }

  setFiltredMovies(movies: IMovie[]) {
    this.filtredMovies = movies;
  }

  findMovies(findStr: string) {
    this.setFiltredMovies(
      this.movies.filter(m => {
        return (
          m.name?.toLowerCase().includes(findStr.toLowerCase()) ||
          m.description?.toLowerCase().includes(findStr.toLowerCase())
        );
      })
    );
  }

  async fetchMovies() {
    try {
      const { data } = await axiosInstance.get<{ docs: IMovie[] }>(
        '/movie',
        getParams({
          page: '1',
          limit: '250',
          year: '2024'
        })
      );

      this.setMovies(data.docs);
      this.setFiltredMovies(data.docs);
    } catch (err) {
      console.error(err);
    }
  }
}

export const movieStore = new Movie();
