import React, { useState } from "react";

function SearchMovies() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=eafcac2b4e83f3f2346c4cf751b811b5&include_adult=false&query=${query}&language=en-US&page=1`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results)
            console.log(movies);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="i.e. Fight Club"/>
                <button className="btn" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--img" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + "poster"}/>
                        <div className="card-content">
                            <div className="card-title">{movie.title}</div>
                            <p><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p><small>RATING: {movie.vote_average}</small></p>
                            <p className="card-desc">{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchMovies;