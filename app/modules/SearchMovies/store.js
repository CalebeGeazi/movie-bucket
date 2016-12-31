import { computed, observable, action } from "mobx";
import { get } from "axios";
import TodoStore from "../TodoList/store";
import Constants from "../../shared/constants";

class Movie {
  data;

  constructor(data) {
    this.data = data;
  }
}

export class MoviesStore {
  @observable movies = [];
  @observable searchTerm = "NBA";
  @observable isLoading = false;
  @observable currentMovie = "";

  @action fetchMovies() {
    this.movies = [];
    if (this.searchTerm) {
      this.toggleLoading();
      return get(`${Constants.API_BASE_URL}/search/movie/title/${this.searchTerm}/fuzzy`)
        .then(action('addMovieToSearchResults', (res) => {
          res.data.results.map(result => {
            const movie = new Movie(result);
            this.movies.push(movie);
          });
          this.toggleLoading();
          this.updateSearchTerm("");
        }));
    }
  }

  @action getMovieInfo(movie) {
    if (!movie.data.overview) {
      return get(`${Constants.API_BASE_URL}/movie/${movie.data.id}`)
        .then(action('getMovieInfo', (res) => {
          movie = new Movie(res.data);
          this.currentMovie = movie;
        }));
    }
    this.currentMovie = movie;
  }

  @action clearCurrentMovie() {
    this.currentMovie = "";
  }

  addToList(movie) {
    TodoStore.createTodo(movie);
  }

  @action toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  @action updateSearchTerm(value) {
    this.searchTerm = value;
  }
}

export default new MoviesStore;
