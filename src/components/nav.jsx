import React, { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onSearchClick = (event) => {
    event.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e21fa2447c53c20a3821028ec4894044&query=${this.state.input}&language=en-US&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        this.setState({ results });
      });
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline" onSubmit={this.onSearchClick}>
            <input
              onChange={(event) => this.setState({ input: event.target.value })}
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
        {this.state.results && this.state.results.length > 0 && (
          <div
            style={{
              backgroundColor: "white",
              width: 400,
              minHeight: 100,
              position: "absolute",
            }}
          >
            {this.state.results.map((result) => (
              <MovieItem movie={result} newMovie={this.props.newMovie} />
            ))}
          </div>
        )}
      </>
    );
  }
}

const MovieItem = ({ movie: { original_title }, movie, newMovie }) => {
  return (
    <span onClick={() => newMovie(movie)} style={{ display: "block" }}>
      {original_title}
    </span>
  );
};

export default NavBar;
