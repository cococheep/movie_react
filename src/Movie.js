import React from "react";
import PropTypes from "prop-types";

function Movies({poster, title, year, summary, genres}){
    return <div className = "movie">
        <img className = "movie__img" src = {poster} alt = {title} title = {title}></img>
        <div className = "movie__data">
            <h4 className = "movie__title">{title}</h4>
            <h5 className = "movie__year">{year}</h5>
            <ul className = "movie__genres">
                {genres.map((genre, index) => {
                return <li className = "genres__genre" key = {index}>{genre}</li>
            })}</ul>
            <p className = "movie__summary">{summary.slice(0, 200) + "..."}</p>
        </div>
    </div>;
}

Movies.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

export default Movies;