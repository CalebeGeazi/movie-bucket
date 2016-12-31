import React from "react";
import { IndexLink, Link } from "react-router";
import { observer, inject } from "mobx-react";
import MovieInfo from "./components/movieInfo";

@inject('moviesStore') @observer
export default class SearchMovies extends React.Component {
  updateSearchTerm = (e) => {
    this.props.moviesStore.updateSearchTerm(e.target.value);
  }

  fetchMovies = (e) => {
    if (e.which == 13) {
      this.props.moviesStore.fetchMovies();
    }
  }

  fetchMovieData = (movie) => {
    this.props.moviesStore.getMovieInfo(movie);
  }

  clearCurrentMovie = () => {
    this.props.moviesStore.clearCurrentMovie();
  }

  addToList = (movie) => {
    this.props.moviesStore.addToList(movie);
  }

  componentDidMount() {
    if (!window.initialFetch) {
      setTimeout(() => {
        this.props.moviesStore.fetchMovies();
      }, 200);
      window.initialFetch = true;
    }
  }

  render() {
    const { isLoading, movies, searchTerm, currentMovie } = this.props.moviesStore;
    const movieLis = movies ? movies.map((movie, i) => (
      <div key={movie.data.id} className="col-lg-1 col-md-2 col-sm-3 col-xs-4 movieInfo-snippet">
        <MovieInfo movie={movie} type="snippet" fetchMovieData={this.fetchMovieData} addToList={this.addToList}/>
      </div>
    )) : "";

    const currentMovieHtml = currentMovie ? (
      <div className="movieInfo-full">
        <MovieInfo movie={currentMovie} clearMovie={this.clearCurrentMovie} type="full" addToList={this.addToList}/>
      </div>
    ) : "";

    const isLoadingClass = isLoading ? "active" : "";

    if (currentMovieHtml) {
      return currentMovieHtml;
    }

    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          className="search-term form-control"
          value={searchTerm}
          onChange={this.updateSearchTerm}
          placeholder="Search for movies"
          onKeyPress={this.fetchMovies}
          autoComplete="1" />
        <div className={`loading ${isLoadingClass}`}>
          <img src="/assets/images/spinner.gif" alt="loading"/>
        </div>
        <h2>Movies {movies.length > 0 ? `(${movies.length})` : ""}</h2>
        <div className="row">
          {movieLis}
        </div>
      </div>
    )
  }
}
