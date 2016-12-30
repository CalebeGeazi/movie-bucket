import React from 'react';

export default class MovieInfo extends React.Component {
  render() {
    const movie = this.props.movie.data;
    if (this.props.type === 'snippet') {
      return (
        <div>
          <div className="movieInfo-snippet-title" title={movie.title}>{movie.title}</div>
          <div className="movieInfo-snippet-img">
            <img src={movie.poster_120x171} alt={`${movie.title} image`} />
          </div>
          <div className="movieInfo-snippet-text">Release Year: {movie.release_year}</div>
          <div className="movieInfo-snippet-text">Rated: {movie.rating}</div>
          <div className="movieInfo-snippet-buttons">
            <button className="btn btn-sm btn-primary"
              onClick={() => this.props.fetchMovieData(this.props.movie)}>Get Info
            </button>
            <button className="btn btn-sm btn-success"
              onClick={() => this.props.addToList(this.props.movie)}>+ Wishlist
            </button>
          </div>
        </div>
      );
    }
    else if (this.props.type === 'full') {
      const releaseDate = new Date(movie.release_date);
      const formattedDate = `${releaseDate.toLocaleString("en-us", { month: "long" })}
      ${releaseDate.getDay()}, ${releaseDate.getFullYear()}`;

      const cast = movie.cast.map((person, i) => person.name);

      const availableSources = movie.subscription_web_sources.concat(movie.purchase_web_sources)
        .map((source, i) => source.display_name);

      return (
        <div>
          <button className="btn btn-sm btn-default" onClick={() => this.props.clearMovie()}>BACK</button>
          <div className="movieInfo-full-title" title={movie.title}>{movie.title}</div>
          <div className="movieInfo-full-img">
            <img src={movie.poster_400x570} alt={`${movie.title} image`} className="img-responsive"/>
          </div>
          <div className="movieInfo-full-text"><strong>Overview: </strong><i>{movie.overview}</i></div>
          <div className="movieInfo-full-text"><strong>Release Date: </strong>{formattedDate}</div>
          <div className="movieInfo-full-text"><strong>Rated: </strong>{movie.rating}</div>
          <div className="movieInfo-full-text"><strong>Cast: </strong>{cast.splice(0, 4).join(', ')}</div>
          <div className="movieInfo-full-text"><strong>Available On: </strong>{availableSources.join(', ')}</div>
            <button className="btn btn-success"
              onClick={() => this.props.addToList(this.props.movie)}>+ Wishlist
            </button>
        </div>
      );
    }
  }
}
