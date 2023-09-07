import React, { useState } from "react";
import MovieCards from "./MovieCard";

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
                    <MovieCards movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    )
}

export default SearchMovies;