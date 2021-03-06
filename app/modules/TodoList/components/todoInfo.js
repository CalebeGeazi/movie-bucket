import React from 'react';

export default class TodoInfo extends React.Component {
  render() {
    const todo = this.props.todo;
    const movie = todo.movie.data;
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
            <div class="checkbox">
              <label>
                <input type="checkbox"
                  value={todo.watched}
                  onChange={() => this.props.toggleWatched(todo)}/> Watched
              </label>
            </div>
          </div>
        </div>
      );
    }
    else if (this.props.type === 'full') {
      return (
        <div>full</div>
      )
      // const releaseDate = new Date(movie.release_date);
      // const formattedDate = `${releaseDate.toLocaleString("en-us", { month: "long" })}
      // ${releaseDate.getDay()}, ${releaseDate.getFullYear()}`;
      //
      // const cast = movie.cast.map((person, i) => person.name);
      //
      // const availableSources = movie.subscription_web_sources.concat(movie.purchase_web_sources);
      // const availableSourcesHtml = availableSources.map((source, i) => {
      //     console.log(source.link);
      //     console.log(source.display_name);
      //     return <a key={i} href={source.link} target="_blank">{source.display_name}
      //       { availableSources.length - 1 === i ? '' : ', '}</a>;
      //   });
      //
      // return (
      //   <div>
      //     <button className="btn btn-sm btn-default" onClick={() => this.props.clearMovie()}>BACK</button>
      //     <div className="movieInfo-full-title" title={movie.title}>{movie.title}</div>
      //     <div className="movieInfo-full-img">
      //       <img src={movie.poster_400x570} alt={`${movie.title} image`} className="img-responsive"/>
      //     </div>
      //     <div className="movieInfo-full-text">
      //       <strong>Overview: </strong><i>{movie.overview}</i>
      //     </div>
      //     <div className="movieInfo-full-text">
      //       <strong>Release Date: </strong>{formattedDate}
      //     </div>
      //     <div className="movieInfo-full-text">
      //       <strong>Rated: </strong>{movie.rating}
      //     </div>
      //     <div className="movieInfo-full-text">
      //       <strong>Cast: </strong>{cast.splice(0, 4).join(', ')}
      //     </div>
      //     <div className="movieInfo-full-text">
      //       <strong>Available On: </strong>{availableSourcesHtml}
      //     </div>
      //     <button className="btn btn-success"
      //       onClick={() => this.props.addToList(this.props.movie)}>+ Wishlist
      //     </button>
      //   </div>
      // );
    }
  }
}
