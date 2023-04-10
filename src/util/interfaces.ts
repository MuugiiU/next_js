interface IAwards {
  wins: number;
  nominations: string;
  text: string;
}

export interface IMovie {
  _id: string;
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];

  rated: string;
  awards: IAwards;
  lastupdates: Date;
  year: Date;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [string];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}
