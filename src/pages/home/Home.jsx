import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";

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
    // console.log(popularMovies);
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map((movie) => {
                        console.log(movie);
                        return (
                            <>
                                <Link
                                    to={`movie/${movie.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#fff",
                                    }}
                                >
                                    <div className="poster-image">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="poster-image-overlay">
                                        <h2 className="poster-image-title">
                                            {movie ? movie.original_title : ""}
                                        </h2>
                                        <h3 className="poster-image-runtime">
                                            {movie ? movie.release_date : ""}
                                            <span className="poster-image-rating">
                                                {movie
                                                    ? movie.vote_average
                                                    : ""}
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </h3>
                                        <p className="poster-image-description">
                                            {movie ? movie.overview : ""}
                                        </p>
                                    </div>
                                </Link>
                            </>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Home;
