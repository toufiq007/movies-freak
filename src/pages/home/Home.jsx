import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        try {
            fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=8859f1b42d3d86df63f61c8950af64b4&language=en-US`
            )
                .then((res) => res.json())
                .then((data) => setPopularMovies(data.results));
        } catch (err) {
            console.log(err);
        }
    }, []);
    console.log(popularMovies);
    return (
        <>
            home page
            {popularMovies.map((movie) => {
                console.log(movie);
            })}
        </>
    );
};

export default Home;
