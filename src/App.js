//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/nav";
import { getElementError } from "@testing-library/react";

class App extends Component {
  state = {
    title: null,
    image: null,
    film: null,
    search: null,
    date: null,
    desc: null,
    genres: null,
    popularity: null,
    revenue: null,
    runtime: null,
  };

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/550?api_key=e21fa2447c53c20a3821028ec4894044";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(this.state.search);
    this.setState({ title: data.title });
    this.setState({ image: data.poster_path });
    this.setState({ date: data.release_date.substring(0, 4) });
    this.setState({ desc: data.overview });
    this.setState({ image: data.poster_path });

    this.setState({ genres: data.genres[0].name });
    this.setState({ popularity: data.popularity });
    this.setState({ revenue: data.revenue });
    this.setState({ runtime: data.runtime });
  }

  update = (event) => {
    this.setState({ search: event });
    console.log(this.state.search);
  };

  newMovie = (movie) => {
    console.log(movie);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar newMovie={this.newMovie} />
        <div
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgrounPosition: "center",
            width: "100%",
            height: "110vh",
            backgroundColor: "grey",
            backgroundBlendMode: "multiply",
          }}
        >
          <div class="media">
            <img
              style={{
                height: "500px",
                width: "400px",
                opacity: "1",
                marginLeft: "120px",
                marginTop: "100px",
              }}
              class="align-self-center mr-3"
              src={`https://image.tmdb.org/t/p/original${this.state.image}`}
              className="img"
              alt=""
            />
            <div class="media-body">
              <h1
                style={{
                  marginTop: "120px",
                  marginLeft: "20px",
                  color: "blanchedalmond",
                }}
              >
                {this.state.title}({this.state.date})
              </h1>
              <p
                style={{
                  marginTop: "0px",
                  marginLeft: "20px",
                  marginRight: "50px",
                  color: "blanchedalmond",
                }}
              >
                {this.state.desc}
              </p>

              <table
                className="table"
                style={{ width: "500px", marginLeft: "20px" }}
              >
                <tr>
                  <td>Genres</td>
                  <td>{this.state.genres}</td>
                </tr>
                <tr>
                  <td>Box Office</td> <td>{this.state.revenue}</td>
                </tr>
                <tr>
                  <td>Popularity</td>
                  <td>{this.state.popularity}</td>
                </tr>
                <tr>
                  <td>Runtime</td>
                  <td>{this.state.runtime}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
