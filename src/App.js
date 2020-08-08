import React from "react";
import axios from "axios";
import Movies from "./Movie";
import "./index.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    let {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=download_count");
    this.setState({movies, isLoading: false});
  }

  componentDidMount (){
    this.getMovies();
  }

  render (){
    const {isLoading, movies} = this.state;
    
    return <section className = "container">
        { isLoading ? 
        <div className = "loader">
          <span className = "loading_text">Loading...</span>
        </div> :
        <div className = "movies">
          {movies.map(movie => {
          return <Movies 
            key = {movie.id} 
            title = {movie.title} 
            poster = {movie.medium_cover_image} 
            year = {movie.year} 
            summary = {movie.summary}
            genres = {movie.genres}/>})}
        </div>}
    </section>
  }
}

export default App; 
