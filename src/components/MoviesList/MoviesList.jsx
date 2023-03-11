import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";
import "./MoviesList.css";

const MoviesList = () => {
    const { type } = useParams();
    const [searchMovies, setSearchMovies] = useState([]);
    let link = `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
    }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    useEffect(() => {
        try {
            fetch(link)
                .then(res=> res.json())
                .then(data=> setSearchMovies(data.results))
        } catch (err) {
            console.log(err);
        }
    }, [type]);
    // console.log(searchMovies);
    return(
        <>
            <div className="card-container">
            {
                searchMovies.map((movie)=> <Cards key={movie.id} movie={movie}/>)
            }
            </div>
        </>
    );
};

export default MoviesList;
