export interface IMovie {
  id: number;
  year: Nullable<number>;
  name: Nullable<string>;
  rating: {
    kp: Nullable<number>;
    imdb: Nullable<number>;
    filmCritics: Nullable<number>;
    russianFilmCritics: Nullable<number>;
    await: Nullable<number>;
  };
  poster: {
    url: Nullable<string>;
    previewUrl: Nullable<string>;
  };
  genres: IGenre[];
  description: Nullable<string>;
}

interface IGenre {
  name: string;
}

export type Nullable<T> = T | null;
