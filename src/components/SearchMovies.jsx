import React from "react";

function SearchMovies() {
    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Fight Club"/>
            <button className="btn" type="submit">Search</button>
        </form>
    )
}

export default SearchMovies;